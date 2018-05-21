import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { Country } from '../models/country';
//import { COUNTRIES } from '../mocks/mock-countries';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CountryService {
  private countriesUrl = 'http://restcountries.eu/rest/v2';
  private countriesUrlFields = '?fields=name;alpha2Code;population;capital;flag';
  public countries: Country[] = [];

  constructor(
    private http: HttpClient,
    private messageService:MessageService
  ) { }

  getOrigCountries(){
    const url = `${this.countriesUrl}/all${this.countriesUrlFields}`;
    return this.http.get<Country[]>(url)
                .pipe(
                  tap(countries => {
                    this.log(`fetched countries`);
                    this.countries = countries;
                  }),
                  catchError(this.handleError('getCountries', []))
                );
  }

  toggleFavourite(id: string) {
    var tmp_country = this.countries.find(country => country.alpha2Code === id);
    tmp_country.favourite = !tmp_country.favourite;
    console.log("Country favourite toggle");
  }

  getCountries(): Observable<Country[]> {
    if(this.countries.length === 0){
      return this.getOrigCountries();
    }else{
      return of(this.countries);
    }
  }

  getCountry(id: string): Observable<Country> {
    this.messageService.add(`CountryService: feched Country id: ${id}`);
    return of(this.countries.find(country => country.alpha2Code === id));
    /*const url = `${this.countriesUrl}/alpha/${id}${this.countriesUrlFields}`;
    return this.http.get<Country>(url).pipe(
      tap(_ => this.log(`fetched country id=${id}`)),
      catchError(this.handleError<Country>(`getCountry id=${id}`))
    );*/
  }

  updateCountry(country: Country): Observable<any> {
    return this.http.put(this.countriesUrl, country, httpOptions).pipe(
      tap(_ => this.log(`updated country id=${country.alpha2Code}`)),
      catchError(this.handleError<any>('updateCountry'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message:string): void{
    this.messageService.add(`CountryService: ${message}`);
  }

}

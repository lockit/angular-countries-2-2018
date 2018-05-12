import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Country } from '../models/country';
import { COUNTRIES } from '../mocks/mock-countries';

import { MessageService } from './message.service'

@Injectable()
export class CountryService {

  constructor(private messageService:MessageService) { }

  getCountries(): Observable<Country[]> {
    this.messageService.add('CountryService: feched Countries');
    return of(COUNTRIES);
  }
  
}

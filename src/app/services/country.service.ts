import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Country } from '../models/country';
import { COUNTRIES } from '../mocks/mock-countries';

@Injectable()
export class CountryService {

  constructor() { }

  getCountries(): Observable<Country[]> {
    return of(COUNTRIES);
  }


}

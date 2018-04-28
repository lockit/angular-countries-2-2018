import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

import { Country } from '../models/country';
import { COUNTRIES } from '../mock/mock-countries';


@Injectable()
export class CountryService {

  constructor() { }

  getCountries(): ObservableCountry[] {
    return of(COUNTRIES);
  }

}

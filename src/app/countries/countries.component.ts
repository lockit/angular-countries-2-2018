import { Component, OnInit } from '@angular/core';

import { COUNTRIES } from '../mocks/mock-countries';
import { Country } from '../models/country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: Country[] = COUNTRIES;
  selectedCountry: Country;

  constructor() { }

  ngOnInit() {
  }

  onSelect(country) {
    this.selectedCountry = country;
  }

}

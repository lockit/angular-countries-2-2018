import { Component, OnInit } from '@angular/core';

import { Country } from '../models/country'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country: Country = {
    id: 1,
    name: 'Angola',
    population: 25868000,
    capital: 'Luanda',
    flag: 'https://restcountries.eu/data/ago.svg'
  };

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../models/country'

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() country: Country;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCountry();
  }

  getCountry(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.countryService.getCountry(id)
      .subscribe(country => this.country = country);
  }

  goBack() {
    this.location.back();
  }

}

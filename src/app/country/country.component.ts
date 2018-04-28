import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../models/country'
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() country: Country;

  constructor(private contryService: CountryService) {

  }

  ngOnInit() {
    this.getCountries();
  }

getCountries(): ObservableCountries {
  this.countryService.getCountries()
  .subscribe(countries => this.countries = countries);
}

}

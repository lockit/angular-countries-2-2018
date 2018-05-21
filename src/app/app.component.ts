import { Component } from '@angular/core';

import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Giro degli stati';

  constructor(private countryService: CountryService) {}

  reloadCountries() {
    console.log("reload countries");
    this.countryService.getOrigCountries().subscribe(
      countries => this.afterReload()
    );
  }

  afterReload(){
    console.log("countries reloaded");
    window.location.reload();
  }
}

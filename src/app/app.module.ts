import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries/countries.component';

import { CountryService } from './services/country.service';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

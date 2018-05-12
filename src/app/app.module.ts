import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries/countries.component';

import { CountryService } from './services/country.service';
import { MessageService } from './services/message.service';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountriesComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CountryService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

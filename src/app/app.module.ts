import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries/countries.component';


import { CountryService } from './services/country.service';
import { MessageService } from './services/message.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpinningStarDirective } from './directives/spinning-star.directive';



@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountriesComponent,
    MessagesComponent,
    DashboardComponent,
    SpinningStarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )*/
  ],
  providers: [
    CountryService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

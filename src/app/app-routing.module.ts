import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'countries', component: CountriesComponent },
  { path: 'country/:id', component: CountryComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}

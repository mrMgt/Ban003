import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { HttpModule }    from '@angular/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './not-found.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomerService } from './services/customer.service';
import { UserService } from './services/user.service';
import { Summer2017Component, KeyUpEnterComponent } from './components/summer2017/summer2017.component';
import { KeyUpEnterComponent1111 } from './components/utils/utils.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

@NgModule({
  imports: [
    BrowserModule,
	CommonModule,
	FormsModule,
	BrowserAnimationsModule,
    MaterialModule,
	HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
	CustomerListComponent,
    CustomerDetailComponent,
    Summer2017Component,
    KeyUpEnterComponent1111,
	KeyUpEnterComponent,
	UserDetailComponent
  ],
  providers: [CustomerService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

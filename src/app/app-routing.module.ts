import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { Summer2017Component } from './components/summer2017/summer2017.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PageNotFoundComponent } from './not-found.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
  { path: 'customer',  component: CustomerListComponent },
  { path: 'customer/:id', component: CustomerDetailComponent },
  { path: 'summer', component: Summer2017Component },
  { path: 'userDetail/:id', component: UserDetailComponent },
  { path: '',   redirectTo: '/customer', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }

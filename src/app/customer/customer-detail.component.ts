import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// import { slideInDownAnimation } from '../animations';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  templateUrl: './customer-detail.component.html'
})
export class CustomerDetailComponent implements OnInit {
  // @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CustomerService
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getCustomer(+params['id']))
      .subscribe((customer: Customer) => this.customer = customer);
  }


   gotoCustomers() {
    let customerId = this.customer ? this.customer.ctmId : null;
    this.router.navigate(['/customer', { id: customerId, foo: 'foo' }]);
  }
}

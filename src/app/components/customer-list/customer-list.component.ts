import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';


@Component({
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Observable<Customer[]>;
  private selectedId: number;
  
  

  constructor(
    private service: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.customers = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getCustomers();
      });
  }

  isSelected(customer: Customer) {
    return customer.ctmId === this.selectedId;
  }

  onSelect(customer: Customer) {
    this.router.navigate(['/customer', customer.ctmId]);
  }
}

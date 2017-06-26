import { Injectable } from '@angular/core';

import { Customer } from './customer';

const CUSTOMER = [
  new Customer(
    1,
    'nguyen dinh linh',
    'company',
    'title',
    'phone',
    'mail',
    'groupname',
    'website',
    'birthday',
    'notes',
    'img',
    'facebook',
    'skype',
    'viber',
    'zalo',
  'twitter'),
  new Customer(
    2,
    'pham van tuan',
    'company',
    'title',
    'phone',
    'mail',
    'groupname',
    'website',
    'birthday',
    'notes',
    'img',
    'facebook',
    'skype',
    'viber',
    'zalo',
  'twitter'),
  new Customer(
    3,
    'Huynh Tan Tien',
    'company',
    'title',
    'phone',
    'mail',
    'groupname',
    'website',
    'birthday',
    'notes',
    'img',
    'facebook',
    'skype',
    'viber',
    'zalo',
  'twitter')
];

const customerPromise = Promise.resolve(CUSTOMER);

@Injectable()
export class CustomerService {

  getCustomers() { return customerPromise; }


  getCustomer(id: number | string) {
    return customerPromise
      .then(customers => customers.find(customer => customer.ctmId === +id));
  }
}


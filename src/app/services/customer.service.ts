import { Injectable } from '@angular/core';

import { Customer } from '../models/customer';

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
    '/assets/img/customer/nexus-s.0.jpg',
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
    '/assets/img/customer/dell-streak-7.0.jpg',
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
    '/assets/img/customer/droid-2-global-by-motorola.0.jpg',
    'facebook',
    'skype',
    'viber',
    'zalo',
  'twitter'),
  new Customer(
    4,
    'Nguyen Tan An',
    'company',
    'title',
    'phone',
    'mail',
    'groupname',
    'website',
    'birthday',
    'notes',
    '/assets/img/customer/droid-pro-by-motorola.0.jpg',
    'facebook',
    'skype',
    'viber',
    'zalo',
  'twitter'),
  new Customer(
    5,
    'Tran Dai Quang',
    'company',
    'title',
    'phone',
    'mail',
    'groupname',
    'website',
    'birthday',
    'notes',
    '/assets/img/customer/motorola-bravo-with-motoblur.0.jpg',
    'facebook',
    'skype',
    'viber',
    'zalo',
  'twitter'),
  new Customer(
    6,
    'Nguyen Phu Trong',
    'company',
    'title',
    'phone',
    'mail',
    'groupname',
    'website',
    'birthday',
    'notes',
    '/assets/img/customer/motorola-defy-with-motoblur.0.jpg',
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


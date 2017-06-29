import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
	user: User;
	
	constructor(
		private userService: UserService,
		private route: ActivatedRoute,
		private location: Location) { }
	
	

	ngOnInit(): void {
		this.route.params
		  .switchMap((params: Params) => this.userService.getUser(+params['id']))
		  .subscribe(user => this.user = user);
	}
	
	save(): void {
		this.userService.updateUser(this.user)
		  .then(() => this.location.back());
	}

	goBack(): void {
		this.location.back();
	}
}

import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-summer2017',
  templateUrl: './summer2017.component.html',
  styleUrls: ['./summer2017.component.css']
})
export class Summer2017Component implements OnInit {
  isDisableProgress : boolean = true;
  users: User[];
  selectedUser: User;
  userNameEntered: string;
  
  constructor(
	private router: Router,
	private userService :UserService) { }

  ngOnInit() {
	this.getUsers();
  }
  
  
  // add user
  // get all user
  // get user by id
	
	getUsers(): void {
		this.userService
			.getAllUsers()
			.then(users => this.users = users);
			
	}
	
	add(name: string): void {
		name = name.trim();
		if (!name) { return; }
		this.userService.addUser(name)
		  .then(user => {
			this.users.push(user);
			this.selectedUser = null;
		  });
	}
	
	delete(user: User): void {
		this.userService
			.deleteUser(user.id)
			.then(() => {
			  this.users = this.users.filter(h => h !== user);
			  if (this.selectedUser === user) { this.selectedUser = null; }
			});
	}
	
	onSelect(user: User): void {
		this.selectedUser = user;
	}
	
	userDetail(user: User): void {
		this.router.navigate(['/userDetail', user.id]);
	}
	
	userEnter(value: string) {
		this.userNameEntered = value;
	}
}

////////////////////////////////////////

@Component({
  selector: 'user-name-enter',
  template: `
	<input placeholder="Enter your name:" #userName111  (keyup.enter)="onEnter111(userName111.value)">
    <p>{{userName}}</p>
  `
})
export class KeyUpEnterComponent {
  userName = '';
  onEnter111(value: string) { this.userName = value; }
}


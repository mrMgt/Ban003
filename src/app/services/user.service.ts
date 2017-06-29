import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from '../models/user';


@Injectable()
export class UserService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private usersUrl = 'api/users';  // URL to web api
	static nextUserId = 100;
	
	constructor(private http: Http) { }

  // get all user by team
  // get user by id
  // add user
  // delete user 
  // update user
  
  getAllUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
               .toPromise()
               .then(response => response.json().data as User[])
               .catch(this.handleError);
  }


  getUser(id: number): Promise<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

  deleteUser(id: number): Promise<void> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  addUser(username: string): Promise<User> {
    let newUser = new User(UserService.nextUserId++, username, 'Team 3', true);
	var parameter = JSON.stringify({id:UserService.nextUserId++, name: username, team:'Team 3', ismaster: true});
    return this.http
      .post(this.usersUrl, parameter, {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as User)
      .catch(this.handleError);
  }

  updateUser(user: User): Promise<User> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

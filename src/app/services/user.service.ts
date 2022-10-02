import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {ACTIVE_USERS, LOGGED_USER} from '../olympus.data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getLoggedUser(): User {
    return LOGGED_USER;
  }

  getActiveUsers(): User[] {
    return ACTIVE_USERS;
  }

  getUserById(id: number): User {
    return ACTIVE_USERS.filter(user => user.id === id)[0];
  }
}

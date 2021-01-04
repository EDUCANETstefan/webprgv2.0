import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {error} from "@angular/compiler/src/util";


export interface IUserEntity {
  id: number;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private id = 1;
  private users: IUserEntity[] = [];


  constructor() { }

  getAllUsers(): Observable<IUserEntity[]> {
    return of(this.users);
  }

  createUser(newUsername: string, newPassword: string): Observable<IUserEntity> {

    const newUser: IUserEntity = {id: this.id, username: newUsername, password: newPassword};
    if(this.users.find(u => u.username === newUsername)) {
      console.log("This user already exist!");
    } else {
      this.id = this.id + 1;
      this.users.push(newUser);
      console.log(newUser);
      return of(newUser);
    }
  }

  getUserById(idNumber: number): Observable<IUserEntity> {
    return of(this.users.find(u => u.id === idNumber));

  }

  editUser(id: number, newUsername: string, newPassword: string): Observable<IUserEntity> {
    for (let user of this.users) {
      if (user.id == id) {
        user.username = newUsername;
        user.password = newPassword;
        this.users.push(user);
        return of(user);
      } else return (error("user not found"));
    }


  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../../model/user";

@Injectable({
  providedIn: 'root'
})
export class ServerService {
	users: User[] | undefined;


  getUsers(): User[] | undefined {
	  return this.users;
  }

}

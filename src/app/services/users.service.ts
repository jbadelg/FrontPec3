import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./../Models/user.iterface";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<User> {
    return this.http.get<User>("https://randomuser.me/api/?results=10");
  }
  getUserSeed(id: string): Observable<User> {
    return this.http.get<User>("https://randomuser.me/api/?seed=" + id);
  }
}

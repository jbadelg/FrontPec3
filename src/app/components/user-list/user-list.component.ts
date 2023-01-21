import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/users.service";
import { User } from "./../../Models/user.iterface";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  list: boolean = true;
  users: User = {
    results: [],
    info: { seed: "s", results: 0, page: 0, version: "" },
  };
  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
  selectList() {
    this.list = true;
    console.log("sleect list !!!");
  }
  selectCard() {
    this.list = false;
    console.log("sleect card ###");
  }
}

import { Component, Input, OnInit } from "@angular/core";
import { User } from "src/app/Models/user.iterface";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  @Input() item: User;
  constructor() {}

  ngOnInit(): void {}
}

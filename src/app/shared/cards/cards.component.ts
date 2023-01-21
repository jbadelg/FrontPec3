import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { MatAccordion } from "@angular/material/expansion";
import { User } from "./../../Models/user.iterface";
@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"],
})
export class CardsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @Input() item: User;
  @Input() cardList: boolean;
  details: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  mostrarMas(): void {
    console.log(this.item);
    this.details = true;
  }
  mostrarMenos(): void {
    this.details = false;
  }
}

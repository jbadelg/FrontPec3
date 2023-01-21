import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "src/app/services/users.service";
import { User } from "./../../Models/user.iterface";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
  animations: [
    trigger("cardsAnimation", [
      state("waiting", style({ opacity: 1 })),
      state("loaded", style({ opacity: 1 })),
      transition("waiting => loaded", [
        query(".user_card", [
          style({ opacity: 0, transform: "translateX(-300px)" }),
          stagger(500, [
            animate(
              "1500ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class UserDetailsComponent implements OnInit {
  user: User;
  animationState: string;
  constructor(
    private userServive: UsersService,
    private activateroute: ActivatedRoute,
    private router: Router
  ) {
    this.animationState = "waiting";
  }

  ngOnInit(): void {
    const userSeed = this.activateroute.snapshot.paramMap.get("id");
    console.log("id: " + userSeed);
    this.userServive.getUserSeed(userSeed).subscribe((user) => {
      if (!user) {
        return this.router.navigateByUrl("/");
      }
      this.user = user;
      console.log("user", this.user);
      this.animationState = "loaded";
    });
  }
}

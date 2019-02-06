import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  showHead: boolean = false;

  constructor(private router: Router) {
    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        if (event["url"] == "/login") {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn;
  constructor(private authService: AuthService) {
    authService.isAuthenticated()
      .subscribe(
        success => this.isLoggedIn = success
      );
  }

  ngOnInit() {}

  logout(){
    this.authService.logout();
  }

}

import { Component, OnInit, HostBinding } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../shared/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public user$ = this.authService.user;
  public form: FormGroup;
 
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit() {}

  login() {
    const inputValue = this.form.value;
    console.log(inputValue.email, inputValue.password);
    this.authService
      .login(inputValue.email, inputValue.password)
      .subscribe(success => this.router.navigate(['/main']), error => alert(error));
  }
}

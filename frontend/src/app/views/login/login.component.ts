import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  isLoggedIn = false;
  userEmail: string;
  password: string;
  isInvalid: boolean;
  emailErrorMsg = false;     // shows a error message if the username is empty
  passErrorMsg = false;        // shows a error message if the password is empty

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  async onSubmit() {
    if (this.userEmail == null) {
      this.emailErrorMsg = true;
    } else {
      this.emailErrorMsg = false;
    }

    if (this.password == null) {
      this.passErrorMsg = true;
    } else {
      this.passErrorMsg = false;
    }

    if (this.userEmail != null && this.password != null) {
        this.authService.login(this.userEmail, this.password).subscribe(data => {
          this.router.navigate(['/dashboard']);
        }, error => {
          
        })
    }
  }
}

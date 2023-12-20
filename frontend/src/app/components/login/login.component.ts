import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { LoginUserService } from '../services/login-user.service';
import { Router } from '@angular/router';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: any;
  message = '';

  constructor(
    public userService: UserService,
    private loginUserService: LoginUserService,
    private router: Router
  ) {}

  credentials = {
    username: '',
    password: ''
  };

  ngOnInit(): void {}

  doLogin(): void {
    // Generate authentication token for the user
    this.userService.generateToken(this.credentials).subscribe(
      (data: any) => {
        this.token = data;
        console.log(data);
        
        // Save the generated token in local storage
        this.loginUserService.saveToken(this.token['token']);
        localStorage.setItem('token', data.token);
        
        // Log in the user using the generated token
        this.userService.loginUser(this.token.token);

        // Retrieve current user details
        this.userService.getCurrentUser().subscribe(
          (user: any) => {
            console.log(user.authorities[0].authority);
            
            // Save the user role in local storage
            localStorage.setItem('LogginUser', user.authorities[0].authority);
            
            this.message = 'Logged in Successfully...';
            window.location.reload(); // Reload the page to update user login status
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        this.message = 'Invalid User'; // Display an error message for invalid user
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message = ''; // Variable to store the registration message
  user = {
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  }; // Object to store user registration data

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  formSubmit() {
    // Check if all required fields are filled
    if (this.user.firstName && this.user.lastName && this.user.username && this.user.password) {
      // Call the addUser() method from the userService to register the user
      this.userService.addUser(this.user).subscribe(
        (response) => {
          console.log(response);
          this.message = 'User Registered...'; // Display a success message upon successful registration
          window.location.reload(); // Reload the page to clear the form
        },
        (error) => {
          this.message = 'User Already exists'; // Display an error message if user already exists
        }
      );
    }
  }
}

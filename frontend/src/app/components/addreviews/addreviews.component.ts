import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'addreviews',
  templateUrl: './addreviews.component.html',
  styleUrls: ['./addreviews.component.css']
})
export class AddreviewsComponent implements OnInit {
  review = new FormGroup({
    review: new FormControl(''),
    rating: new FormControl('')
  });

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    // This method is called when the component is initialized
  }

  addReview() {
    // This method is called when the user submits the review form
    console.log(this.route.snapshot.params['productId']); // Access the product ID from the route
    console.log(this.review.value); // Get the review form values
    this.userService.addReview(this.route.snapshot.params['productId'], this.review.value)
      .subscribe(
        data => {
          console.log(data); // Log the response from the server
          this.router.navigate(['/add-product']); // Navigate to the add-product page after successful review submission
        },
        error => {
          console.log(error); // Log any errors that occur during the review submission
        }
      );
  }
}

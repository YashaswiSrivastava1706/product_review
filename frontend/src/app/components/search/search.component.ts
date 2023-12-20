import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private userService: UserService) { }

  productName: any; // Variable to store the product name entered by the user
  message: any; // Variable to store the search result message
  product: any; // Variable to store the retrieved product data

  ngOnInit(): void {
  }

  searchByproductName() {
    // Call the getproductByProductName() method from the userService to search for products by product name
    this.userService.getproductByProductName(this.productName).subscribe(
      res => {
        console.log(res);
        this.product = res; // Assign the retrieved data to the product variable
        console.log("In this", this.product);
        if (this.product.length == 0) {
          this.message = "No product found"; // Display a message if no products are found
        } else {
          this.message = ''; // Clear the message if products are found
        }
      },
      error => {
        console.log(error); // Log any errors that occur during the search process
      }
    );
  }

}

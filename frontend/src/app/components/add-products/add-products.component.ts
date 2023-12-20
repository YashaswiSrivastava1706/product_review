import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  message='';
  public product = {
    productName:'',
    brandName:'',
    code:'',
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // This method is called when the component is initialized
  }

  addproduct() {
    // This method is called when the user clicks the "Add Product" button
    if (this.product.productName && this.product.brandName && this.product.code) {
      // Check if all required fields are filled
      this.userService.addProducts(this.product)
        .subscribe(
          (data) => {
            console.log(data); // Log the response from the server
            this.reloadPage(); // Reload the page to reflect the updated product list
          },
          (error) => {
            this.message = "Enter unique values"; // Display an error message if duplicate values are entered
          }
        );
    }
  }

  reloadPage(): void {
    // Helper method to reload the page
    window.location.reload();
  }
}

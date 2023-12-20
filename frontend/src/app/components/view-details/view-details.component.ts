import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'view-products',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private userService: UserService) { }

  collection: any; // Variable to store the retrieved product data

  ngOnInit(): void {
    // Call the allProducts() method from the userService to get all products and subscribe to the returned observable
    this.userService.allProducts().subscribe((result) => {
      this.collection = result; // Assign the retrieved data to the collection variable
    }, err => {
      console.log(err); // Log any errors that occur during the retrieval process
    });
  }
}

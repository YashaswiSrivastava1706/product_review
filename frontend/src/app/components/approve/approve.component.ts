import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  constructor(private userService: UserService) { }
  collection: any;

  ngOnInit(): void {
    // Retrieve all reviews for approval
    this.userService.allReview().subscribe(
      (result: any) => {
        console.log(result);
        this.collection = result;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public approve(id: any) {
    // Approve a review by its ID
    this.userService.approveReview(id, 'approved').subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public disApprove(id: any) {
    // Disapprove a review by its ID
    this.userService.approveReview(id, 'disapproved').subscribe();
  }
}

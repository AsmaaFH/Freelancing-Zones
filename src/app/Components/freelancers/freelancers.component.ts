import { Component, OnInit } from '@angular/core';
import { FreelancerService } from 'src/app/Services/freelancer.service';
import { Observable, Subscription } from 'rxjs';
import { Freelancer } from 'src/app/ViewModels/freelancer';

@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.css']
})
export class FreelancersComponent implements OnInit {

  subscription:Subscription[]=[];
  freelancersList:Freelancer[];
  constructor(private freelancerService:FreelancerService) { }

  ngOnInit(): void {
    /*this.subscription.push(this.freelancerService.getAllFreelancers().subscribe(
      (response)=>{this.freelancersList},
      (error)=>{console.log("error while retrieving data")}
    ))*/
  }

}

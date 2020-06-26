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

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  

  subscription:Subscription[]=[];
  


  freelancersList:Freelancer[]/* =[{id:1,flName:"Asmaa Hassan",flJobTitle:"Frontend Developer",flImg:"assets/1.jpg",
qoute:"ITI freelancing instructors and mentors provided me with the tips and tricks to effectively create my freelancing profile and get my first job.."},
{id:2,flName:"Asmaa Hassan",flJobTitle:"Frontend Developer",flImg:"assets/2.jpg",
qoute:"ITI freelancing instructors and mentors provided me with the tips and tricks to effectively create my freelancing profile and get my first job.."},
{id:3,flName:"Asmaa Hassan",flJobTitle:"Frontend Developer",flImg:"assets/WhatsApp Image 2020-06-13 at 3.08.42 AM.jpeg",
qoute:"ITI freelancing instructors and mentors provided me with the tips and tricks to effectively create my freelancing profile and get my first job.."}] ; */

  constructor(private freelancerService:FreelancerService) { }

  ngOnInit(): void {
     this.subscription.push(this.freelancerService.getAllFreelancers().subscribe(
      (response)=>{this.freelancersList},
      (error)=>{console.log("error while retrieving data")}
    )) 
  }

}

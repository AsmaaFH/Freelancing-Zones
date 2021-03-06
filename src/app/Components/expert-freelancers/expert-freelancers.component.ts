import { Component, OnInit } from '@angular/core';
import { ExpertFreelancerService } from 'src/app/Services/expert-freelancer.service';
import { Subscription } from 'rxjs';
import { ExpertFreelancer } from 'src/app/ViewModels/expert-freelancer';


@Component({
  selector: 'app-expert-freelancers',
  templateUrl: './expert-freelancers.component.html',
  styleUrls: ['./expert-freelancers.component.css']
})
export class ExpertFreelancersComponent implements OnInit {

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
  
  private subscriptions:Subscription[]=[];
  expertFreelancersList:ExpertFreelancer[];/*  =[
    {id:1, expertName:"Hany Saad",expertJobTitle:"ITI freelancing zones technical manager.",address:"Assuit",
    story:"with more than 12 years of experience in software development, monitoring,and team leading, Hany has furtherly expanded his work to the freelancing world and participating remotely in different projects",
  expertImg:"assets/hany.png"},
    {id:2,expertName:"Lamiaa Ahmed",expertJobTitle:"ITI freelancing zones technical manager.",address:"Assuit",
    story:"with mor, Hany has furtherly expanded his work to the freelancing world and participating remotely in different projects",
  expertImg:"assets/lamiaa.jpg"},
  {id:3,expertName:"Hany Saad",expertJobTitle:"ITI freelancing zones technical manager.",address:"Assuit",
    story:"with more than 12 years of experience in software development, monitoring,and team leading, Hany has furtherly expanded his work to the freelancing world and participating remotely in different projects",
  expertImg:"assets/bahaa.jpg"},
  {id:4,expertName:"Mohammed Salah",expertJobTitle:"ITI freelancing zones technical manager.",address:"Assuit",
  story:"with more than 12 years of experience in software development, monitoring,and team leading, Hany has furtherly expanded his work to the freelancing world and participating remotely in different projects",
expertImg:"assets/salah.jpg"},
{id:5,expertName:"Ahmed Hassan",expertJobTitle:"ITI freelancing zones technical manager.",address:"Assuit",
    story:"with more than 12 years of experience in software development, monitoring,and team leading, Hany has furtherly expanded his work to the freelancing world and participating remotely in different projects",
  expertImg:"assets/ahmed2.jpg"},
  {id:6,expertName:"Ahmed Hassan",expertJobTitle:"ITI freelancing zones technical manager.",address:"Assuit",
  story:"with more than 12 years of experience in software development, monitoring,and team leading, Hany has furtherly expanded his work to the freelancing world and participating remotely in different projects",
  expertImg:"assets/ahmed2.jpg"}
  
  ];
  */
  constructor(private expertFreelancerService:ExpertFreelancerService) { }

  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit(): void {
    this.subscriptions.push(this.expertFreelancerService.getAllExpertFreelancers().subscribe(
      (response)=>{
        this.expertFreelancersList=response;
      },
      (err) => {alert("error Occured while retrieving data !"); }
    ))
    this.slides = this.chunk(this.expertFreelancersList, 3);
  }

}

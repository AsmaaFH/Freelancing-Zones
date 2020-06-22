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
  private subscriptions:Subscription[]=[];
  expertFreelancersList:ExpertFreelancer[]/* =[
    {expertName:"Hany Saad",expertJobTitle:"ITI freelancing zones technical manager.",address:"Assuit",
    linkedInProfile:"LinkedIn@",story:"with more than 12 years of experience in software development, monitoring,and team leading, Hany has furtherly expanded his work to the freelancing world and participating remotely in different projects",
  expertImg:"assets/hany.png"},
    {expertName:"Lamiaa Ahmed",expertJobTitle:"ITI freelancing zones technical manager.",address:"Assuit",
    linkedInProfile:"LinkedIn@",story:"with more than 12 years of experience in software development, monitoring,and team leading, Hany has furtherly expanded his work to the freelancing world and participating remotely in different projects",
  expertImg:"assets/lamiaa.jpg"},
  {expertName:"Hany Saad",expertJobTitle:"ITI freelancing zones technical manager.",address:"Assuit",
    linkedInProfile:"LinkedIn@",story:"with more than 12 years of experience in software development, monitoring,and team leading, Hany has furtherly expanded his work to the freelancing world and participating remotely in different projects",
  expertImg:"assets/bahaa.jpg"},
  {expertName:"Mohammed Salah",expertJobTitle:"ITI freelancing zones technical manager.",address:"Assuit",
  linkedInProfile:"LinkedIn@",story:"with more than 12 years of experience in software development, monitoring,and team leading, Hany has furtherly expanded his work to the freelancing world and participating remotely in different projects",
expertImg:"assets/salah.jpg"},
{expertName:"Ahmed Hassan",expertJobTitle:"ITI freelancing zones technical manager.",address:"Assuit",
    linkedInProfile:"LinkedIn@",story:"with more than 12 years of experience in software development, monitoring,and team leading, Hany has furtherly expanded his work to the freelancing world and participating remotely in different projects",
  expertImg:"assets/ahmed2.jpg"},
  {expertName:"Ahmed Rezk",expertJobTitle:"ITI freelancing zones technical manager.",address:"Assuit",
    linkedInProfile:"LinkedIn@",story:"with more than 12 years of experience in software development, monitoring,and team leading, Hany has furtherly expanded his work to the freelancing world and participating remotely in different projects",
  expertImg:"assets/ahmed.jpg"},
  
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

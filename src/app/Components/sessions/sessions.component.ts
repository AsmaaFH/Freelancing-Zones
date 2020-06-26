import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/Services/session.service';
import { Subscription } from 'rxjs';
import { Session } from  'src/app/ViewModels/session';


@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
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
    nav: false
  }
  monthIndex=new Date().getMonth();
  dayIndex=new Date().getUTCDay();
  time=new Date().toLocaleTimeString();
  Months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];
  days:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  month=this.Months[this.monthIndex];
  day=this.days[this.dayIndex];
  subscriptions:Subscription[]=[];
  searchText="";

  sessionList:Session[];/* =[
    {id:1,title:"Challenges of work from home",date:new Date(), expertName:"Mohammed Salah", expertJobTitle:"Graphic Designer",
  pannerImage:"assets/freelancer.png"},
  {id:2,title:"Challenges of work from home",date:new Date(), expertName:"Mohammed Salah", expertJobTitle:"Graphic Designer",
  pannerImage:"assets/freelancer.png"},
  {id:3,title:"Challenges of work from home",date:new Date(), expertName:"Mohammed Salah", expertJobTitle:"Graphic Designer",
  pannerImage:"assets/freelancer.png"},
  {id:4,title:"Challenges of work from home",date:new Date(), expertName:"Mohammed Salah", expertJobTitle:"Graphic Designer",
  pannerImage:"assets/freelancer.png"},
  {id:5,title:"Challenges of work from home",date:new Date(), expertName:"Mohammed Salah", expertJobTitle:"Graphic Designer",
  pannerImage:"assets/freelancer.png"}
  ];
 */
  constructor(private sessionService:SessionService) { }

  ngOnInit(): void {

  /*   var x = new Date('2013-05-23');
    var y = new Date('2013-05-23');
    console.log(this.day);
    console.log(this.time);
    console.log(+x < +y); */
    this.subscriptions.push(this.sessionService.getAllSessions().subscribe(
      (response) => {
        this.sessionList = response;
      },
      (err) => {alert("error Occured while retrieving data !"); }
    ));
  }



}

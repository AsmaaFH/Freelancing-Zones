import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/Services/session.service';
import { Subscription } from 'rxjs';
import { Session } from 'protractor';
import { SessionType } from 'src/app/ViewModels/session-type.enum';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  monthIndex=new Date().getMonth();
  dayIndex=new Date().getUTCDay();
  time=new Date().toLocaleTimeString();
  Months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];
  days:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  month=this.Months[this.monthIndex];
  day=this.days[this.dayIndex];
  subscriptions:Subscription[]=[];
  sessionList:Session[];
  searchText="";

  anyList=[{"type":"Webinar","subject":"The challenges of remote working","CoachName":"Mohamed Salah",
            "image":"https://dummyimage.com/600x400/ff6063/235587&text=Session+Image",
            "month":this.month,"day":this.day, "time":this.time},
           {"type":"Webinar","subject":"Hoe crisis can create opportunity","CoachName":"Farghaly",
            "image":"https://dummyimage.com/600x400/ff6063/235587&text=Session+Image",
            "month":this.month,"day":this.day, "time":this.time},
            {"type":"Webinar","subject":"Freelancing and remote working in the era of COVID-19","CoachName":"Lamiaa Ahmed",
            "image":"https://dummyimage.com/600x400/ff6063/235587&text=Session+Image",
            "month":this.month,"day":this.day ,"time":this.time}
          ]

  constructor(private sessionService:SessionService) { }

  ngOnInit(): void {

    var x = new Date('2013-05-23');
    var y = new Date('2013-05-23');
    console.log(this.day);
    console.log(this.time);
    console.log(+x < +y);
    /*this.subscriptions.push(this.sessionService.getAllSessions().subscribe(
      (response) => {
        this.sessionList = response;
      },
      (err) => {alert("error Occured while retrieving data !"); }
    ));*/
  }



}

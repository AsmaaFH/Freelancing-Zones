import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from 'protractor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  monthIndex=new Date().getMonth();
  dayIndex=new Date().getUTCDay();
  time=new Date().toLocaleTimeString();
  Months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];
  days:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  month=this.Months[this.monthIndex];
  day=this.days[this.dayIndex];

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
  constructor(private httpClient:HttpClient) { }
/* 
  getCurrentSessions():Session[]{
    return this.anyList.filter(m=>{m.time>new Date()})
  } */
  getAllSessions():Observable<Session[]>
  {
    return this.httpClient.get<Session[]>(`${environment.API_URL}/Sessions`);
  }

/*   getOlderSeesion():Observable<Session[]>{
    return this.httpClient.
  } */
}

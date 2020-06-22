import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OlderSessionsService {

  constructor(private httpClient: HttpClient) { 
  }

  //getOlderSessions():Observable<Session[]>
  //{
   // return this.httpClient.get<Session[]>(`${environment.API_URL}`);
  //

  x = new Date('2013-05-23');
  y = new Date('2013-05-23');

  


}

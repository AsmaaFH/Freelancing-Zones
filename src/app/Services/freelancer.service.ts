import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Freelancer } from '../ViewModels/freelancer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor(private httpClient:HttpClient) { }

  getAllFreelancers():Observable<Freelancer[]>{
    return this.httpClient.get<Freelancer[]>(`${environment.API_URL}/Quotes`);
  }
}

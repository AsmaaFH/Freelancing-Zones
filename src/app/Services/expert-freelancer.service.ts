import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ExpertFreelancer } from '../ViewModels/expert-freelancer';


@Injectable({
  providedIn: 'root'
})
export class ExpertFreelancerService {

  constructor(private httpClient:HttpClient) { }

  getAllExpertFreelancers():Observable<ExpertFreelancer[]>{
    return this.httpClient.get<ExpertFreelancer[]>(`${environment.API_URL}/SuccessStories`);
  }
}

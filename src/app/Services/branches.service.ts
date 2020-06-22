import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Branch } from '../ViewModels/branch';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  constructor(private httpClient:HttpClient) {
   }

   getAllBranches():Observable<Branch[]>{
    return this.httpClient.get<Branch[]>(`${environment.API_URL}/Branches`)
   }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Course } from '../ViewModels/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) { }

  getAllCources():Observable<Course[]>
  {
    return this.httpClient.get<Course[]>(`${environment.API_URL}/MaharatechCourses`)
  }
}

import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Services/course.service';
import { Course } from 'src/app/ViewModels/course';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-freelancing-courses',
  templateUrl: './freelancing-courses.component.html',
  styleUrls: ['./freelancing-courses.component.css']
})
export class FreelancingCoursesComponent implements OnInit {

  staticCoursesList:Course[]=[
    {id:1,courseName:"Freelancing Course1",image:"assets/freelanceCourse.png"},
    {id:2,courseName:"Freelancing Course2",image:"assets/freelanceCourse.png"},
    {id:3,courseName:"Freelancing Course3",image:"assets/freelanceCourse.png"},
    {id:4,courseName:"Freelancing Course4",image:"assets/freelanceCourse.png"}
  ]; 
  courseList:Course[];
  private subscriptions: Subscription[] = [];
  constructor(private courseService:CourseService) {  }

  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit(): void {
      this.subscriptions.push(this.courseService.getAllCources().subscribe(
      (response) => {
        this.courseList = response;
      },
      (err) => {alert("error Occured while retrieving data !"); }
    ));

    this.slides = this.chunk(this.staticCoursesList, 4);
  }


}
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

    coursesList:Course[];/* =[
    {id:1,courseName:"Freelancing Course1",image:"assets/Freelancing-20190925113339332-1.jpg"},
    {id:2,courseName:"Freelancing Course2",image:"assets/Freelancing-20190925113339332-1.jpg"},
    {id:3,courseName:"Freelancing Course3",image:"assets/freelanceCourse.png"},
    {id:4,courseName:"Freelancing Course4",image:"assets/Freelancing-20190925113339332-1.jpg"},
    {id:5,courseName:"Freelancing Course5",image:"assets/freelanceCourse.png"},
    
  ];  */
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
        this.coursesList = response;
      },
      (err) => {alert("error Occured while retrieving data !"); }
    ));

    this.slides = this.chunk(this.coursesList, 4);
  }


}
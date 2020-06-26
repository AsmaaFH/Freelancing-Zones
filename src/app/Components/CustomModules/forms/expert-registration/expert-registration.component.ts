import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-registration',
  templateUrl: './expert-registration.component.html',
  styleUrls: ['./expert-registration.component.css']
})
export class ExpertRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("expert registration works")
  }

}

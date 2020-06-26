import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Branch } from 'src/app/ViewModels/branch';
import { BranchesService } from 'src/app/Services/branches.service';

@Component({
  selector: 'app-freelancing-zones',
  templateUrl: './freelancing-zones.component.html',
  styleUrls: ['./freelancing-zones.component.css']
})
export class FreelancingZonesComponent implements OnInit {

  subscriptions:Subscription[]=[];
  branchesList:Branch[]=[
    {id:1,name:"Assuit1",location:"Assuit university1"},
    {id:2,name:"Assuit2",location:"Assuit university2"},
    {id:3,name:"Assuit3",location:"Assuit university3"},
    {id:4,name:"Assuit4",location:"Assuit university4"},
    {id:5,name:"Assuit5",location:"Assuit university5"},
    {id:6,name:"Assuit6",location:"Assuit university6"},
    {id:7,name:"Assuit7",location:"Assuit university7"}
  ];
  constructor(private branchService :BranchesService) { }

  ngOnInit(): void {
   /*  this.subscriptions.push(this.branchService.getAllBranches().subscribe(
      (response)=>{
        this.branchesList=response;
      },
      (err) => {alert("error Occured while retrieving data !"); }
    )) */
  }

}

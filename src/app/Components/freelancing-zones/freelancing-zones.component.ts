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
  branchesList:Branch[];
  constructor(private branchService :BranchesService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.branchService.getAllBranches().subscribe(
      (response)=>{
        this.branchesList=response;
      },
      (err) => {alert("error Occured while retrieving data !"); }
    ))
  }

}

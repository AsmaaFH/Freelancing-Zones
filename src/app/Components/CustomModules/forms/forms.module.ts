import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertRegistrationComponent } from './expert-registration/expert-registration.component';
import { PartnerRegistrationComponent } from './partner-registration/partner-registration.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'expert', component: ExpertRegistrationComponent},
  {path: 'partner', component: PartnerRegistrationComponent},
  {path: 'user', component: UserRegistrationComponent},
  {path: '', redirectTo: '/expert', pathMatch: 'full'}
];


@NgModule({
  declarations: [ExpertRegistrationComponent, PartnerRegistrationComponent, UserRegistrationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FormsModule { }

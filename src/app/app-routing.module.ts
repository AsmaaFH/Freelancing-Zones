import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path : 'session' , loadChildren : ()=>import('./Components/CustomModules/sessions/sessions.module').then(m=>m.SessionsModule)},
  {path: 'form', loadChildren: ()=> import('./Components/CustomModules/forms/forms.module').then(m => m.FormsModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

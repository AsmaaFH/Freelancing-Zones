import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OlderSessionsComponent } from './older-sessions/older-sessions.component';

const routes: Routes  = [
  {path: 'older', component: OlderSessionsComponent},
]

@NgModule({
  declarations: [OlderSessionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SessionsModule { }

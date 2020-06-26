import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { MainServicesComponent } from './Components/main-services/main-services.component';
import { ExpertFreelancersComponent } from './Components/expert-freelancers/expert-freelancers.component';
import { FreelancersComponent } from './Components/freelancers/freelancers.component';
import { FreelancingZonesComponent } from './Components/freelancing-zones/freelancing-zones.component';
import { ImpactComponent } from './Components/impact/impact.component';
import { PartnersOfferingsComponent } from './Components/partners-offerings/partners-offerings.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {FreelancingCoursesComponent} from './Components/freelancing-courses/freelancing-courses.component'
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCarouselModule } from '@ngmodule/material-carousel';
//import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
//import { CarouselModule, WavesModule, ButtonsModule,CardsModule } from 'angular-bootstrap-md';
import {SessionsComponent} from './Components/sessions/sessions.component';
import { FilterPipe } from './Pipes/filter.pipe'
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainServicesComponent,
    ExpertFreelancersComponent,
    FreelancersComponent,
    FreelancingZonesComponent,
    ImpactComponent,
    PartnersOfferingsComponent,
    FooterComponent,
    FreelancingCoursesComponent,
    SessionsComponent,
    FilterPipe,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCarouselModule.forRoot(),
    CarouselModule,
    //WavesModule, 
    //ButtonsModule,
    //CardsModule,
    FormsModule
],
  
  providers: [],
  bootstrap: [AppComponent],

  exports:[

  ]
})
export class AppModule { }

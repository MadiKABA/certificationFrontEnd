import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontOfficComponent } from './front-offic/front-offic.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    FrontOfficComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PublicPageModule { }

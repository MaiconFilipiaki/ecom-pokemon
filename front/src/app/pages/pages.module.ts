import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CartComponent } from './cart/cart.component';
import {ComponentsModule} from "../components/components.module";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    HomeComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    ComponentsModule,
    MatIconModule,
],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }

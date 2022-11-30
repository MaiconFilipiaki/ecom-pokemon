import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CartComponent, Modal } from './cart/cart.component';
import {ComponentsModule} from "../components/components.module";
import {MatIconModule} from "@angular/material/icon";
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    Modal
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    ComponentsModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }

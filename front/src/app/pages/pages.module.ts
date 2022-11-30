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
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';

import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    Modal,
    CheckoutComponent
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
    MatExpansionModule,
    FormsModule
],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }

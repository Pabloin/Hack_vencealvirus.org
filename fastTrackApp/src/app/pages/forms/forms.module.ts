import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { ButtonsComponent } from './buttons/buttons.component'

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule
  ],
  declarations: [
    ButtonsComponent
  ],
  exports: [
    ButtonsComponent
  ]
})
export class FormsModule { }

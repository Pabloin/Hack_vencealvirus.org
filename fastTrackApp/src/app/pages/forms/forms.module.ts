import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';

import { FormsRoutingModule } from './forms-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { BuscaComponent } from './busca/busca.component';
import { SubeComponent } from './sube/sube.component';
import { AnalizaComponent } from './analiza/analiza.component'

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    FormsRoutingModule,
  ],
  declarations: [
    ButtonsComponent,
    BuscaComponent,
    SubeComponent,
    AnalizaComponent,
  ],
  exports: [
    ButtonsComponent,
    BuscaComponent,
    SubeComponent,
    AnalizaComponent,
  ],
})
export class FormsModule { }

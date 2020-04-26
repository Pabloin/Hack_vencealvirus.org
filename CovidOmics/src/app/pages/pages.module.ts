import { NgModule } from '@angular/core';
import {
  NbMenuModule,
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

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FormsModule } from './forms/forms.module';
import { PagesRoutingModule } from './pages-routing.module';
// import { ButtonsComponent } from './forms/buttons/buttons.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbUserModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    DashboardModule,
    FormsModule,
  ],
  declarations: [
    PagesComponent,
    // ButtonsComponent,
  ],
})
export class PagesModule {
}

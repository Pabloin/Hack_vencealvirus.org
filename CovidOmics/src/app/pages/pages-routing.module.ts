import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { IniciaComponent } from './forms/inicia/inicia.component';
import { BuscaComponent } from './forms/busca/busca.component';
import { SubeComponent } from './forms/sube/sube.component';
import { AnalizaComponent } from './forms/analiza/analiza.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    { path: 'dashboard',       component: DashboardComponent, },
    { path: 'forms/inicia',    component: IniciaComponent, },
    { path: 'forms/busca',     component: BuscaComponent, },
    { path: 'forms/sube',      component: SubeComponent, },
    { path: 'forms/analiza',   component: AnalizaComponent, },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImpressPage } from './impress.page';

const routes: Routes = [
  {
    path: '',
    component: ImpressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImpressPageRoutingModule {}

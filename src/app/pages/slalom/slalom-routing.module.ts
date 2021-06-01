import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingPage } from './slalom.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingPageRoutingModule {}

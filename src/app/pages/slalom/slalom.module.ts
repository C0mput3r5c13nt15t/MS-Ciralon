import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  HttpClient } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { TrainingPageRoutingModule } from './slalom-routing.module';
import { TrainingPage } from './slalom.page';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { ComponentsModule } from '../../components/componets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingPageRoutingModule,
    ComponentsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [TrainingPage]
})
export class TrainingPageModule {}

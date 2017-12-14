import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizhelloPage } from './quizhello';

@NgModule({
  declarations: [
    QuizhelloPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizhelloPage),
  ],
})
export class QuizhelloPageModule {}

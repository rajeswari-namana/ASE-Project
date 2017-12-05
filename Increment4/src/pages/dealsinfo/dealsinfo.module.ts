import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealsinfoPage } from './dealsinfo';

@NgModule({
  declarations: [
    DealsinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(DealsinfoPage),
  ],
})
export class DealsinfoPageModule {}

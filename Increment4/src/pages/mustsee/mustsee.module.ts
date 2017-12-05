import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MustseePage } from './mustsee';

@NgModule({
  declarations: [
    MustseePage,
  ],
  imports: [
    IonicPageModule.forChild(MustseePage),
  ],
})
export class MustseePageModule {}

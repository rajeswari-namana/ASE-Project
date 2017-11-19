import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantMapPage } from './restaurant-map';

@NgModule({
  declarations: [
    RestaurantMapPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantMapPage),
  ],
})
export class RestaurantMapPageModule {}

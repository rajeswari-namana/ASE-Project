import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {AboutPage} from "../about/about";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  aboutPage=AboutPage;

  constructor(public navCtrl: NavController) {
  }

}



import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
homePage=HomePage;
registerPage=RegisterPage;

  constructor(public navCtrl: NavController) {

  }

}

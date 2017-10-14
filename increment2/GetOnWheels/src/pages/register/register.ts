import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AboutPage} from "../about/about";
import {User} from "../../models/user";
import {AngularFireAuth} from "angularfire2/auth";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;
  aboutPage=AboutPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }



}



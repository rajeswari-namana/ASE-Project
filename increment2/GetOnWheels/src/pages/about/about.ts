import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {WeatherPage} from "../weather/weather";
import {RegisterPage} from "../register/register";
<<<<<<< HEAD
import {User} from "../../models/user";
import { AngularFireAuth} from "angularfire2/auth";
=======
import { Facebook } from '@ionic-native/facebook';

>>>>>>> f5307f77d382020d2c0cacb5bd17c55d35dd6355

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  user = {} as User;
weatherPage=WeatherPage;
registerPage=RegisterPage;
isLoggedIn:boolean = false;
users: any;

<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
=======
  constructor(public navCtrl: NavController,private fb: Facebook) {
>>>>>>> f5307f77d382020d2c0cacb5bd17c55d35dd6355

    fb.getLoginStatus()
    .then(res => {
      console.log(res.status);
      if(res.status === "connect") {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })
    .catch(e => console.log(e));

  }

  login() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if(res.status === "connected") {
          this.isLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }
  logout() {
    this.fb.logout()
      .then( res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
  }
  getUserDetail(userid) {
    this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
      .then(res => {
        console.log(res);
        this.users = res;
      })
      .catch(e => {
        console.log(e);
      });
  }  




}

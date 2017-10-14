import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {WeatherPage} from "../weather/weather";
import {RegisterPage} from "../register/register";
import {User} from "../../app/models/user";
import {AngularFireAuth} from "angularfire2/auth";

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  user = {} as User;


  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {

  }
  async login(user : User) {
    try {
      const result=this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if(result){
        this.navCtrl.setRoot('WeatherPage');
      }}
    catch(e){
      console.error(e);
    }
  }
register(){
 this.navCtrl.push('RegisterPage') ;
}
}

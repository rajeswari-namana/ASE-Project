import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {WeatherPage} from "../weather/weather";
import {RegisterPage} from "../register/register";
import {User} from "../../app/models/user";
import {AngularFireAuth} from "angularfire2/auth";
import {GooglePlus} from "@ionic-native/google-plus";
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  user = {} as User;


  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public googleplus:GooglePlus, private toast: ToastController) {

  }


  async login(user : User) {

      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(suc => {


          this.navCtrl.setRoot('TabsPage');
        alert("login successful");

      }).catch(ns=>{
        alert("Please enter correct email and password")
      })


  }

register(){
 this.navCtrl.push('RegisterPage') ;
}
  goologin(){
    this.googleplus.login({
      'webClientId': '572221592836-dm6i8m9oegh30r84uej3d6dff6oi2g0n.apps.googleusercontent.com',
      'offline': true
    }).then(res=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)).then(suc=>{
        alert("login successful");
        this.navCtrl.setRoot('TabsPage');
      }).catch(ns=>{
        alert("Unsuccesful")
      })
    })

  }

}

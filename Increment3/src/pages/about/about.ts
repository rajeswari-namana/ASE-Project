import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {WeatherPage} from "../weather/weather";
import {RegisterPage} from "../register/register";
import {User} from "../../app/models/user";
import {AngularFireAuth} from "angularfire2/auth";
import {GooglePlus} from "@ionic-native/google-plus";
import firebase from 'firebase';
import { SessionProvider } from '../../providers/session/session';
import { Facebook } from '@ionic-native/facebook';



@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  user = {} as User;
  isLoggedIn:boolean = false;
  users: any;


  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,
              public googleplus:GooglePlus, private toast: ToastController, private session: SessionProvider,private fb: Facebook) {
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

  loginFB() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if(res.status === "connected") {
          this.isLoggedIn = true;
          this.session.setSessionIdentifier(3);
          this.navCtrl.setRoot('TabsPage');
         
        //  this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
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

  logout() {
    this.fb.logout()
      .then( res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
  }


  async login(user : User) {

      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(suc => {


          this.navCtrl.setRoot('TabsPage');
          this.session.setSessionIdentifier(1);
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
        this.session.setSessionIdentifier(2);
        alert("login successful");
        this.navCtrl.setRoot('TabsPage');
      }).catch(ns=>{
        alert("Unsuccesful")
      })
    })

  }

}

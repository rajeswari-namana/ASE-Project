import { Component } from '@angular/core';
import { IonicApp ,IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { User } from "../../app/models/user";
import { SessionProvider } from '../../providers/session/session';

import { App } from 'ionic-angular/components/app/app';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  indentifier:any;
  user = {} as User;
  isLoggedIn:boolean = false;
  //indentifier:any;
  loginPage = {} as AboutPage;
  constructor(private app: App,public navCtrl: NavController, public navParams: NavParams,
    public events: Events, private session: SessionProvider) {

    console.log('Welcome to the constructor' );

    }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  logoutAll() {
    if (this.session.getSessionIdentifier() == 1) {
      console.log("Session Identifier : ", this.session.getSessionIdentifier());
    }

    if (this.session.getSessionIdentifier() == 3) {
      console.log("Session Identifier : ", this.session.getSessionIdentifier());

    }

    this.app.getRootNav().setRoot(AboutPage);
  }
}

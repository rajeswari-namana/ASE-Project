import { Component ,ViewChild ,ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { MallsdetailsProvider} from "../../providers/mallsdetails/mallsdetails";
=======
import {MallsdetailsProvider} from "../../providers/mallsdetails/mallsdetails";
>>>>>>> f5307f77d382020d2c0cacb5bd17c55d35dd6355

/**
 * Generated class for the MallsinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-mallsinfo',
  templateUrl: 'mallsinfo.html',
})
export class MallsinfoPage {
<<<<<<< HEAD
mallsinfo: any;
mallsData: any;
=======
  mallsinfo: any;
  mallsData: any={};
  pic: any={};
  rev: any={};
>>>>>>> f5307f77d382020d2c0cacb5bd17c55d35dd6355
  constructor(public navCtrl: NavController, public navParams: NavParams, public malls: MallsdetailsProvider) {
    this.mallsinfo=navParams.get('mallsinfo')
    this.malls.detailedMalls(this.mallsinfo)
      .then(data => {
        this.mallsData = data;
<<<<<<< HEAD

      })

  }



=======
        this.pic= this.mallsData.photos[0];
        this.rev= this.mallsData.reviews[1];
        console.log(this.mallsData.rating);
      })


  }


  getArray(size): Array<any> {
    return new Array(size);
  }
>>>>>>> f5307f77d382020d2c0cacb5bd17c55d35dd6355
}

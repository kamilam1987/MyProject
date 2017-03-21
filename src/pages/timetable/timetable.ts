import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/*
  Generated class for the Timetable page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html'
})
export class TimetablePage {
reverse: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.reverse = this.navParams.get("name");
   if(this.reverse == null)
      this.reverse = "Alimak";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimetablePage');
  }
   goBackToHomePage() {
    	this.navCtrl.pop(HomePage);
  }//goBackToHomePage()
  

}

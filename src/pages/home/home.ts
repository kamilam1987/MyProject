import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {TimetablePage} from '../timetable/timetable';

import {CalendarPage} from '../calendar/calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1Root = HomePage;
  tab2Root = TimetablePage;
  tab3Root = CalendarPage;

  constructor(public navCtrl: NavController) {
    
  }
  // Method to navigate to the about page
  navigateToTimetablePage() {
    	this.navCtrl.push(TimetablePage);
  }//navigateToAboutPage()

    navigateToTimetableChange() {
    	this.navCtrl.push(TimetablePage, {name: "Kamila"}); 
  }//navigateToAboutPageChange()

 // Method to navigate to the about page
  navigateToCalendarPage() {
    	this.navCtrl.push(CalendarPage);
  }//navigateToAboutPage()

    navigateToCalendarChange() {
    	this.navCtrl.push(CalendarPage, {name: "Kamila"}); 
  }//navigateToAboutPageChange()


}

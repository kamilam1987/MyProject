import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//import all pages and tabs
import { HomePage } from '../pages/home/home';
import { TimetablePage}  from '../pages/timetable/timetable';
import { CalendarPage}  from '../pages/calendar/calendar';
import { AlarmPage}  from '../pages/alarm/alarm';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TimetablePage,
    CalendarPage,
    AlarmPage,
    TabsPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TimetablePage,
    CalendarPage,
    AlarmPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

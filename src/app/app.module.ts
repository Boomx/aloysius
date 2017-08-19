import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenusPage } from "../pages/menus/menus";
import { CandidatesListPage } from "../pages/menus/candidatesList/candidatesList";
import { CandidateProfilePage } from "../pages/candidateProfile/candidateProfile";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MenusPage,
    CandidatesListPage,
    CandidateProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MenusPage,
    CandidatesListPage,
    CandidateProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

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
import { CandidatesService } from '../services/candidates/candidates.service'
import { HttpModule } from "@angular/http";
import { TagsListPage } from "../pages/menus/tagsList/tagsList";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MenusPage,
    CandidatesListPage,
    CandidateProfilePage,
    TagsListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MenusPage,
    CandidatesListPage,
    CandidateProfilePage,
    TagsListPage
  ],
  providers: [
    CandidatesService,
    TagsListPage,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { Component, ViewChild, ViewChildren } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenusPage } from '../pages/menus/menus';
import { ListPage } from '../pages/list/list';
import { CandidatesListPage } from "../pages/menus/candidatesList/candidatesList";
import { CandidateProfilePage } from "../pages/candidateProfile/candidateProfile";
import { CandidatesService } from "../services/candidates/candidates.service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  menusPage: any = MenusPage;
  pages: Array<{title: string, component: any}>;
  loading: boolean;
  constructor(
    public platform: Platform, 
    public statusBar: StatusBar,
    public splashScreen: SplashScreen, 
    public eventCtrl:Events,
    public candidateService: CandidatesService
  ) {
    this.initializeApp();
    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Não iniciados', component: HomePage },
      { title: 'Pessoas', component: ListPage },
      { title: 'Tags', component: ListPage },
      { title: 'Status', component: ListPage },
      { title: 'Contatos Realizados', component: ListPage }      
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.candidateService.loadCandidates().subscribe((resp)=>{

      });

      this.setSubscriptions();
      // this.nav.setRoot(CandidateProfilePage);
    });
  }

  setSubscriptions(){
    this.eventCtrl.subscribe('changeRootPage', (candidate) => {
      console.log("FOWDASE",candidate);
      
      this.nav.setRoot(CandidateProfilePage,candidate);
    });
  }
}

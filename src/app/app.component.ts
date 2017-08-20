import { Component, ViewChild} from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenusPage } from '../pages/menus/menus';
import { CandidateProfilePage } from "../pages/candidateProfile/candidateProfile";
import { CandidatesService } from "../services/candidates/candidates.service";
import { LoadingController, ModalController } from 'ionic-angular';
import { EditProfilePage } from "../pages/candidateProfile/editProfile/editProfile";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  menusPage: any = MenusPage;
  pages: Array<{title: string, component: any}>;
  loading: boolean;
  loader;
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public eventCtrl:Events,
    public candidateService: CandidatesService,
    public loadingController: LoadingController,
    public fodase : ModalController
  ) {
    this.initializeApp();
    this.loader = this.loadingController.create();
    this.loader.present();
    // fodase.create(EditProfilePage).present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.candidateService.loadCandidates().subscribe((resp)=>{
        this.loader.dismiss();
      });

      this.setSubscriptions();
    });
  }

  setSubscriptions(){
    this.eventCtrl.subscribe('changeRootPage', (candidate) => {
      this.nav.push(CandidateProfilePage,candidate);
    });
  }
}

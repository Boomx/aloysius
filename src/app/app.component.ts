import { Component, ViewChild, ViewChildren } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenusPage } from '../pages/menus/menus';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  menusPage: any = MenusPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public eventCtrl:Events) {
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
      
      this.setSubscriptions();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
  }

  setSubscriptions(){
    this.eventCtrl.subscribe('changeRootPage', (page) => {
      this.nav.setRoot(ListPage);
    });
  }
}

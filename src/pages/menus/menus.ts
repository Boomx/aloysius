import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CandidatesListPage } from "./candidatesList/candidatesList";
import { TagsListPage } from "./tagsList/tagsList";
import { StatusListPage } from "./statusList/statusList";

@Component({
  selector: 'page-menus',
  templateUrl: 'menus.html'
})
export class MenusPage {
  menus: Array<{title: string,component: any}>;
  constructor(public navCtrl: NavController) {
    this.menus = [
      { title: 'Pessoas', component: CandidatesListPage},
      { title: 'Tags', component: TagsListPage},
      { title: 'Status', component: StatusListPage}
    ];
  }

  showCandidates(page){
    this.navCtrl.push(page.component);
  }




}

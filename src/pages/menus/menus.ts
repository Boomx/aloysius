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
  menus: Array<{title: string,component: any, icon: string}>;
  constructor(public navCtrl: NavController) {
    this.menus = [
      { title: 'Todos', component: CandidatesListPage, icon: 'people'},
      { title: 'Habilidades', component: TagsListPage, icon: 'pricetags'},
      { title: 'Status', component: StatusListPage, icon: 'stats'}
    ];
  }

  showCandidates(page){
    this.navCtrl.push(page.component);
  }




}

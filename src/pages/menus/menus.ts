import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CandidatesListPage } from "./candidatesList/candidatesList";
import { ListPage } from "../list/list";

@Component({
  selector: 'page-menus',
  templateUrl: 'menus.html'
})
export class MenusPage {
  menus: Array<{title: string}>;
  constructor(public navCtrl: NavController) {
    this.menus = [
      { title: 'Não iniciados'},
      { title: 'Pessoas'},
      { title: 'Tags'},
      { title: 'Status'},
      { title: 'Contatos Realizados'}      
    ];
  }

  showCandidates(){
    // console.log(this.navCtrl.getActive());
    // this.navCtrl.first()._nav.push(ListPage)
    this.navCtrl.push(CandidatesListPage);
  }


    

}

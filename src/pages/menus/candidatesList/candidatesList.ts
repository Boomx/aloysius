import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-candidates-list',
  templateUrl: 'candidatesList.html'
})
export class CandidatesListPage {
  candidates: Array<{title: string}>;
  constructor(public navCtrl: NavController, public eventCtrl:Events) {
    this.candidates = [
      { title: 'Joao'},
      { title: 'Maria'},
      { title: 'Jose'},
      { title: 'Vinicius'},
      { title: 'Catarina'}      
    ];
  }

  showCandidate(){
      this.eventCtrl.publish('showCandidate',{name:'Denilson'})
  }

}

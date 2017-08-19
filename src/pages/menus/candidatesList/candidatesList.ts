import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { CandidatesService } from "../../../services/candidates/candidates.service";

@Component({
  selector: 'page-candidates-list',
  templateUrl: 'candidatesList.html'
})
export class CandidatesListPage {
  candidates: Array<{title: string}>;
  constructor(
    public navCtrl: NavController, 
    public eventCtrl:Events,
    public candidatesService:CandidatesService) {
    this.candidates = candidatesService.getCandidates();
    navCtrl.canGoBack();
  }

  showCandidate(candidate){
      this.eventCtrl.publish('changeRootPage',candidate)
  }

}

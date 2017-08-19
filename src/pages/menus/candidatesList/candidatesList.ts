import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { CandidatesService } from "../../../services/candidates/candidates.service";

@Component({
  selector: 'page-candidates-list',
  templateUrl: 'candidatesList.html'
})
export class CandidatesListPage {
  candidates: Array<{title: string}>;
  allCandidates: Array<{title: string}>;
  constructor(
    public navCtrl: NavController, 
    public eventCtrl:Events,
    public candidatesService:CandidatesService) {
    this.allCandidates = candidatesService.getCandidates();
    this.candidates = candidatesService.getCandidates();
  }

  showCandidate(candidate){
    this.eventCtrl.publish('changeRootPage',candidate)
  }

  searchCandidates(param){
    this.candidates = this.candidatesService.searchCandidates(param,this.allCandidates);
  }

}

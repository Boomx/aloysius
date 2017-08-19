import { Component } from '@angular/core';
import { NavController, Events, NavParams } from 'ionic-angular';
import { CandidatesService } from "../../../services/candidates/candidates.service";
import * as R from "ramda";

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
    public candidatesService:CandidatesService,
    public navParam: NavParams,) {
    
    this.allCandidates =  candidatesService.getCandidates();
    this.candidates = R.isEmpty(navParam.data) ?  candidatesService.getCandidates() : navParam.data;
  }

  showCandidate(candidate){
    this.eventCtrl.publish('changeRootPage',candidate)
  }

  searchCandidates(param){
    this.candidates = this.candidatesService.searchCandidates(param,this.allCandidates);
  }

}

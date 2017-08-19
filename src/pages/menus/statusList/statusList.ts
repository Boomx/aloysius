import { Component } from '@angular/core';
import { NavController, Events, ToastController } from 'ionic-angular';
import { CandidatesService } from "../../../services/candidates/candidates.service";
import { CandidatesListPage } from "../candidatesList/candidatesList";
import * as R from "ramda";

@Component({
  selector: 'page-tags-list',
  templateUrl: 'statusList.html'
})
export class StatusListPage {
  allCandidates: Array<any>;
  queryCandidates: Array<any>;
  constructor(
    public navCtrl: NavController, 
    public eventCtrl:Events,
    public candidatesService:CandidatesService,
    public toastController: ToastController) {
    this.allCandidates = candidatesService.getCandidates();
  }

  getCandidateTags(candidate){
    return candidate.tags.split(',').map(x=>x.trim());
  }

  statusCodes = [0, 1, 2, 3, 4]
  
  getStatusFromEnum = this.candidatesService.getStatusfromEnum;

  showCandidatesFromCode(code){
    const candidates = this.allCandidates.filter((candidate)=>{
      return candidate.status == code;
    });
    if( R.isEmpty(candidates)) {
      const toaster = this.toastController.create({message:"Não candidatos existem com estes status",position:"top"});
      toaster.present();
      setTimeout(function() {
        toaster.dismiss();
      }, 2000);
    }
    else this.navCtrl.push(CandidatesListPage, candidates);
  }
}

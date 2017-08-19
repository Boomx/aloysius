import { Component } from '@angular/core';
import { NavController, Events, NavParams, LoadingController } from 'ionic-angular';
import { CandidatesService } from "../../services/candidates/candidates.service";

@Component({
  selector: 'candidate-profile-page',
  templateUrl: 'candidateProfile.html'
})
export class CandidateProfilePage {
  profile;
  constructor(
    public navCtrl: NavController,
    public eventCtrl:Events,
    public navParams: NavParams,
    public candidateService: CandidatesService,
    public loadingController: LoadingController) {
    this.profile = {};
    var profile = {...navParams.data};
    profile.tags = (typeof profile.tags)  === 'string' ? profile.tags.split(',') : (Array.isArray(profile.tags) ? profile.tags: [] );
    this.profile = profile;
  }

  showCandidate(){
      this.eventCtrl.publish('changeRootPage',{name:'Denilson'})
  }

  updateStatus(candidate){
    var loader =  this.loadingController.create();
    loader.present();
    this.candidateService.updateCandidateStatus(candidate).subscribe(resp=>{
      loader.dismiss();
    })
  }

}

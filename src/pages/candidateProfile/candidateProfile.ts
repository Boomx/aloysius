import { Component } from '@angular/core';
import { NavController, Events, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { CandidatesService } from "../../services/candidates/candidates.service";
import { EditProfilePage } from "./editProfile/editProfile";

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
    public loadingController: LoadingController,
    public modalController: ModalController)
     {
    this.profile = {};
    var profile = {...navParams.data};
    profile.tags = this.parseTags(profile.tags);
    this.profile = profile;
    
  }

  getStatusfromEnum = this.candidateService.getStatusfromEnum;

  showCandidate(){
      this.eventCtrl.publish('changeRootPage',{name:'Denilson'})
  }

  parseTags(tags){
    return (typeof tags)  === 'string' ? tags.split(',') : (Array.isArray(tags) ? tags: [] );
  }

  getColorByStatus(num){
    return ["myGray", "myLightYellow", "myYellow", "myGreen", "myRed"][num];
  }

  updateStatus(candidate){
    var loader =  this.loadingController.create();
    loader.present();
    this.candidateService.updateCandidateStatus(candidate).subscribe(resp=>{
      setTimeout(()=> this.candidateService.loadCandidate(candidate.id).subscribe((resp)=>{
        this.profile.newObs = "";
        this.profile = resp.json();
        this.profile.tags = this.parseTags(this.profile.tags);
        loader.dismiss();
      })
      , 1000);
    })
  }

  editCandidate(){
    this.modalController.create(EditProfilePage).present();
  }
}

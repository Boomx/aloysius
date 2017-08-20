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
  loader;
  waitProfile;
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
    this.loader =  this.loadingController.create();
    this.loader.present();
    this.candidateService.loadCurriculum(profile.id).subscribe(resp=>{
      this.waitProfile = resp.json();
      this.loader.dismiss();
    })
  }

  getStatusfromEnum = this.candidateService.getStatusfromEnum;

  parseTags(tags){
    return (typeof tags)  === 'string' ? tags.split(',') : (Array.isArray(tags) ? tags: [] );
  }

  getColorByStatus(num){
    return ["myGray", "myLightYellow", "myYellow", "myGreen", "myRed"][num];
  }

  updateStatus(candidate){
    console.log("updateStatus");
    this.loader = this.loader =  this.loadingController.create();
    this.loader.present();
    this.candidateService.updateCandidateStatus(candidate).subscribe(resp=>{
      setTimeout(()=> this.candidateService.loadCandidate(candidate.id).subscribe((resp)=>{
        this.profile.newObs = "";
        this.profile = resp.json();
        this.profile.tags = this.parseTags(this.profile.tags);
        this.loader.dismiss();
      })
      , 1000);
    })
  }

  editCandidate(){
    console.log("editCandidate");
    var modal = this.modalController.create(EditProfilePage,this.profile);
    this.loader = this.loader =  this.loadingController.create();
    modal.present();
    modal.onDidDismiss(resp=>{
      if(resp){
        this.loader.present();
        this.candidateService.updateCandidateStatus(resp).subscribe(resp=>{
          this.loader.dismiss();
        })
      }
    })
  }

  downloadCurriculum(){
      var blob;
      var blob_response = new Blob([ 'data:application/octet-stream;base64,' + this.waitProfile.filecontent], {
        type: 'application/pdf'
      });

      var fileURL = URL.createObjectURL(blob_response);
      
      var summary_pdf = document.createElement('a');
      summary_pdf.href = fileURL;
      summary_pdf.target = '_blank';
      summary_pdf.download = this.waitProfile.filename;
      // return summary_pdf;
      document.body.appendChild(summary_pdf);
      summary_pdf.click();
      // $scope.alerts.push(response.data.message);
  }
}

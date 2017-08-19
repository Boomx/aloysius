import { Component } from '@angular/core';
import { NavController, Events, NavParams } from 'ionic-angular';

@Component({
  selector: 'candidate-profile-page',
  templateUrl: 'candidateProfile.html'
})
export class CandidateProfilePage {
  profile;
  constructor(public navCtrl: NavController, public eventCtrl:Events,public navParams: NavParams) {
    this.profile = {};
    var profile = navParams.data;
    console.log(typeof profile.tags);
    
    profile.tags = (typeof profile.tags)  === 'string' ? profile.tags.split(',') : (Array.isArray(profile.tags) ? profile.tags: [] );
    // console.log(profile.data.tags.split(','));
    this.profile = profile;
    console.log(this.profile);
    
  }

  showCandidate(){
      this.eventCtrl.publish('changeRootPage',{name:'Denilson'})
  }

}

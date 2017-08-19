import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

@Component({
  selector: 'candidate-profile-edit-page',
  templateUrl: 'editProfile.html'
})
export class EditProfilePage {
  profile;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalContoller: ModalController) {
    this.profile = {};
    var profile = {...navParams.data};
    // profile.tags = this.parseTags(profile.tags);
    this.profile = profile;
    
  }
}

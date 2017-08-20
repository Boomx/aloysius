import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

@Component({
  selector: 'candidate-profile-edit-page',
  templateUrl: 'editProfile.html'
})
export class EditProfilePage {
  profile;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalContoller: ModalController,
    public viewController: ViewController) {
    this.profile = {};
    var profile = {...navParams.data};
    this.profile = profile;
  }

  cancel(){
    this.viewController.dismiss(false);
  }

  submit(){
    this.viewController.dismiss(this.profile);
  }
}

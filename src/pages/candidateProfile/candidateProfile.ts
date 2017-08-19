import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'candidate-profile-page',
  templateUrl: 'candidateProfile.html'
})
export class CandidateProfilePage {
  profile;
  constructor(public navCtrl: NavController, public eventCtrl:Events) {
    this.profile = {
      nome: "Luan de sena barbosa",
      idade: 23,
      cidade: "rio de janeiro",
      estado: "RJ",
      area: "tecnologia",
      subarea: "dev",
      tags: ["python", "lua", "golang"],
      email: "lbarbosa@stone.com.br",
      telefone: "(021)99131-0095",
      linkedin: "aaaaaaaaaaaaaaaaaaa",
      github: "bbbbbbbbbbbbbbbbbbbb",
      obs: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam possimus officia, dolores voluptate quia recusandae quaerat praesentium nobis, nesciunt reprehenderit deserunt laudantium eum aut sunt cupiditate odit optio tempora beatae.",
      status: 1
    }
  }

  showCandidate(){
      this.eventCtrl.publish('changeRootPage',{name:'Denilson'})
  }

}

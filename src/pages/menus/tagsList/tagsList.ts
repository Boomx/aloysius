import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { CandidatesService } from "../../../services/candidates/candidates.service";
import { CandidatesListPage } from "../candidatesList/candidatesList";

@Component({
  selector: 'page-tags-list',
  templateUrl: 'tagsList.html'
})
export class TagsListPage {
  tags: Array<{title: string}>;
  allCandidates: Array<{title: string}>;
  queryCandidates: Array<any>;
  constructor(
    public navCtrl: NavController, 
    public eventCtrl:Events,
    public candidatesService:CandidatesService) {
    
    this.allCandidates = candidatesService.getCandidates();
    // console.log(this.gatherTags());
    
  }

//   gatherTags(){
//     this.allCandidates.reduce((candidate)=>{
        
//     },[])
    
//   }

  showCandidate(candidate){
    this.eventCtrl.publish('changeRootPage',candidate)
  }

  searchCandidates(param){
    this.queryCandidates = this.candidatesService.searchCandidates(param,this.allCandidates);
  }

  showCandidates(){
    this.navCtrl.push(CandidatesListPage,this.allCandidates);
  }
}

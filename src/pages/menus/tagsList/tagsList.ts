import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { CandidatesService } from "../../../services/candidates/candidates.service";
import { CandidatesListPage } from "../candidatesList/candidatesList";
import * as R from "ramda";

@Component({
  selector: 'page-tags-list',
  templateUrl: 'tagsList.html'
})
export class TagsListPage {
  tags: any;
  allCandidates: Array<any>;
  queryCandidates: Array<any>;
  constructor(
    public navCtrl: NavController, 
    public eventCtrl:Events,
    public candidatesService:CandidatesService) {
    this.allCandidates = candidatesService.getCandidates();
    this.tags = this.gatherTags();
  }

  getCandidateTags(candidate){
    return candidate.tags.split(',').map(x=>x.trim());
  }

  gatherTags(){
    const tags = R.chain(this.getCandidateTags, this.allCandidates)
    const uniqueTags = R.uniq(tags)
    return uniqueTags;
  }

  showCandidatesFromTag(tag){
    const candidates = this.allCandidates.filter((candidate)=>{
      return this.getCandidateTags(candidate).includes(tag);
    });
    this.navCtrl.push(CandidatesListPage,candidates);
  }
}

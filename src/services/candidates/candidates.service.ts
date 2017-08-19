import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class CandidatesService {
  candidates : Array<any>;
  constructor(public http: Http) {       
    this.candidates = [];
  }

  loadCandidates() : Observable<any>{
    return this.http.get("https://hackmundi.herokuapp.com/candidatos/").map((resp) =>{
      console.log(resp);
      this.candidates = resp.json();
    });
  }

  getCandidates(){
    return this.candidates;
  };
}

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
    return this.http.get("https://hackmundi.herokuapp.com/candidatos").map((resp) =>{
      this.candidates = resp.json();
    });
  }

  loadCandidate(id) : Observable<any>{
    return this.http.get("https://hackmundi.herokuapp.com/candidatos/"+ id);
  }

  updateCandidateStatus(candidate):Observable<any>{
    return this.http.put("https://hackmundi.herokuapp.com/candidatos/"+ candidate.id + "/status",{status:candidate.status,obs:candidate.newObs});
  }

  updateCandidate(candidate):Observable<any>{
    return this.http.put("https://hackmundi.herokuapp.com/candidatos/"+ candidate.id ,candidate);
  }

  getCandidates(){
    return this.candidates;
  };

  searchCandidates(param,candidates){
    if(!param) return candidates;
    return candidates.filter((candidate)=>{
      return Object.keys(candidate).some(key=> {
        if(typeof candidate[key] === 'string' || Array.isArray(candidate[key])){
            return candidate[key].includes(param)
        }
        return false;
      });
    })
  }

  getStatusfromEnum(num){
    return ["Novo","Pendente","Em processo","Contratado","Eliminado"][num];
  }

  loadCurriculum(id) : Observable<any>{
    return this.http.get("https://hackmundi.herokuapp.com/candidatos/"+ id);
  }
}

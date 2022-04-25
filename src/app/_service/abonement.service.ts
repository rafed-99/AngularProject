import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import { Abonement } from '../models/abonement';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class AbonementService {

  apiURL = "http://localhost:8080/api/abonement/sub/allsubscriptions";
  getSingleSub = "http://localhost:8080/api/abonement/retrieveSubscription";
  addUrl = "http://localhost:8080/api/abonement/sub/addsubscriptions";
  supUrl = "http://localhost:8080/api/abonement/deleteSubscription";
  updateUrl = "http://localhost:8080/api/abonement/sub/modifysubscriptions";
  affectUrl = "http://localhost:8090/api/abonement/assignSubscriptionToUser";
  getByLevel = "http://localhost:8080/api/abonement/abonementByLevel";
  getPer = "http://localhost:8080/api/abonement/percentagebylevel"
  constructor(private _http:HttpClient) { }
  retrieveabonement(): Observable<Abonement[]>{
    return this._http.get<Abonement[]>(this.apiURL);
    }

  addAbonement(abon: Abonement):Observable<Abonement>{
      return this._http.post<Abonement>(this.addUrl, abon, httpOptions);
  }
    
  supprimerAbonement(id : number) {
 
    return this._http.delete<Abonement>(this.supUrl+"/"+id);
    }

  consulterAbonement(id: number): Observable<Abonement> {
      return this._http.get<Abonement>(this.getSingleSub+"/"+id);
  }


  updateAbonement(abon :Abonement) : Observable<Abonement>{
        return this._http.put<Abonement>(this.updateUrl+"/"+abon.idSubscription, abon, httpOptions);
  }

  affectationSubtoUser(id :number , idUser : number,abon :Abonement): Observable<any>
  {
    return this._http.post<Abonement>(this.affectUrl+"/"+id+"/"+idUser+"/",abon );
  }

  percentageByLevel(): Observable<any> {

    return this._http.get<number>(this.getPer);
  }

    
}

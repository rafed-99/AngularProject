import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {Candidacy} from '../models/Candidacy';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class CandidacyService {
  apiURL = 'http://localhost:8080/offer/retrive-All-Candidacys';
  apiURL1 = 'http://localhost:8080/offer/retrieveCandidacybyid';
  supUrl = 'http://localhost:8080/offer/DeleteCandidacyById';
  addUrl = 'http://localhost:8080/offer/AddOffer1';
  upUrl = 'http://localhost:8080/offer/updateCandidacy/{idCandidacy}';
  getUrlexcel = 'http://localhost:8080/offer/download/candidacies.xlsx';

  public dataForm: FormGroup;
  constructor(private http: HttpClient) {  }
  RetrieveCandidacy(): Observable<Candidacy[]>{
    return this.http.get<Candidacy[]>(this.apiURL);
  }
  DeleteCandidacy(id: number) {

    return this.http.delete<Candidacy>(this.supUrl + '/' + id);

  }


  consulterCandidacy(id: number): Observable<Candidacy> {
    const url = `${this.apiURL1}/${id}`;
    return this.http.get<Candidacy>(url);
  }





  addCandidacy( can: Candidacy): Observable<Candidacy>{
    return this.http.post<Candidacy>(this.addUrl, can);
  }



  updateCandidacy(prod: Candidacy): Observable<Candidacy>
  {
    return this.http.put<Candidacy>(this.upUrl, prod);
  }



  exportExcel(): Observable<Blob>{
    return this.http.get(this.getUrlexcel, {responseType: 'blob'});
  }


}

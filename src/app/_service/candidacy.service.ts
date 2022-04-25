import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {Candidacy} from "../models/Candidacy";


@Injectable({
  providedIn: 'root'
})
export class CandidacyService {
  apiURL = 'http://localhost:8085/offer/retrive-All-Candidacys';
  supUrl = 'http://localhost:8085/offer/DeleteCandidacyById';
  addUrl = 'http://localhost:8085/offer/candidacies';
  upUrl = 'http://localhost:8085/offer/updateCandidacy/{idCandidacy}';
  public dataForm: FormGroup;
  constructor(private http: HttpClient) {  }
  RetrieveCandidacy(): Observable<Candidacy[]>{
    return this.http.get<Candidacy[]>(this.apiURL);
  }
  DeleteCandidacy(id: number) {

    return this.http.delete<Candidacy>(this.supUrl + '/' + id);

  }


  consulterCandidacy(id: number): Observable<Candidacy> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Candidacy>(url);
  }

  createData(formData: FormData): Observable<any> {
    return this.http.post(`${this.addUrl}`, formData);
  }

  uploadFile(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  addCandidacy( can: Candidacy): Observable<Candidacy>{
    return this.http.post<Candidacy>(this.addUrl, can);
  }
  updateCandidacy(prod: Candidacy): Observable<Candidacy>
  {
    return this.http.put<Candidacy>(this.upUrl, prod);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Offer} from '../models/Offer';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  constructor(private http: HttpClient) {  }
  apiURL = 'http://localhost:8085/offer/retrive-All-Offers';
  supUrl = 'http://localhost:8085/offer/DeleteOfferById';
  addUrl = 'http://localhost:8085/offer/AddOffer1';
  upUrl = 'http://localhost:8085/offer/updateoffer/{idOffer}';
  apiURL1 = 'http://localhost:8085/offer/retrieveOfferbyid/{id}';
  pdfUrl  = 'http://localhost:8085/offer/exportpdfoffer';
   recUrl = 'http://localhost:8085/offer/listAllOffer';

  RetrieveOffer(): Observable<Offer[]>{
    return this.http.get<Offer[]>(this.apiURL);
  }

  DeleteOffer(id: number) {

    return this.http.delete<Offer>(this.supUrl + '/' + id);

  }
  consulteOffer(id: number): Observable<Offer> {
    return this.http.get<Offer>(this.apiURL1 + '/' + id);
  }


  addOffer( can: Offer): Observable<Offer>{
    return this.http.post<Offer>(this.addUrl, can);
  }



  consulterOffer(id: number): Observable<Offer> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Offer>(url);
  }
  updateOffer(prod: Offer): Observable<Offer>
  {
    return this.http.put<Offer>(this.upUrl, prod);
  }

  exportPdfOffer(): Observable<Blob>{
    return this.http.get(this.pdfUrl, {responseType: 'blob'});
  }


  SearchMultiple(key: string): Observable<Offer[]>
  {
    return this.http.get<Offer[]>(this.recUrl + '/' + key);
  }




}

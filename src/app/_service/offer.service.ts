import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Offer} from "../models/Offer";




@Injectable({
  providedIn: 'root'
})
export class OfferService {
  apiURL = 'http://localhost:8085/offer/retrive-All-Offers';
  supUrl = 'http://localhost:8085/offer/DeleteOfferById';
  addUrl = 'http://localhost:8085/offer/AddOffer1';
  upUrl = 'http://localhost:8085/offer/updateoffer/{idOffer}';
  constructor(private http: HttpClient) {  }
  RetrieveOffer(): Observable<Offer[]>{
    return this.http.get<Offer[]>(this.apiURL);
  }

  DeleteOffer(id: number) {

    return this.http.delete<Offer>(this.supUrl + '/' + id);

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


}

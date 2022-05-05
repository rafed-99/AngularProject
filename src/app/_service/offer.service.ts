import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Offer} from "../models/Offer";
import {Abonement} from '../models/abonement';


@Injectable({
  providedIn: 'root'
})
export class OfferService {
  apiURL = 'http://localhost:8080/offer/retrive-All-Offers';
  supUrl = 'http://localhost:8080/offer/DeleteOfferById';
  addUrl = 'http://localhost:8080/offer/AddOffer1';
  upUrl = 'http://localhost:8080/offer/updateoffer/{idOffer}';
  serch = 'http://localhost:8080/offer/listAllOffer';
  pdf = 'http://localhost:8080/api/abonement/exportpdfsub';
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

  SearchMultiple(key:string) :Observable<Offer[]>
  {
    return this.http.get<Offer[]>(this.serch+'/'+key);
  }

  exportPdfOffer():Observable<Blob>
  {
    return this.http.get(this.pdf,{responseType:'blob'} );
  }


}

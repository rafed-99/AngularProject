import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Offer} from '../models/Offer';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  apiURL = 'http://localhost:8085/offer/retrive-All-Offers';
  api1Url = 'http://localhost:8085/offer/retrieveOfferbyid';
  supUrl = 'http://localhost:8085/offer/DeleteOfferById';
  addUrl = 'http://localhost:8085/offer/AddOffer1';
  upUrl = 'http://localhost:8085/offer/updateoffer';
  serch = 'http://localhost:8085/offer/listAllOffer';
  pdf = 'http://localhost:8085/api/abonement/exportpdfsub';
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
    const url = `${this.api1Url}/${id}`;
    return this.http.get<Offer>(url);
  }

  updateOffer(off: Offer): Observable<Offer>{
    return this.http.put<Offer>(this.upUrl + '/' + off.idOffer, off, httpOptions);
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

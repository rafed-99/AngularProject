import { Component, OnInit } from '@angular/core';
import {Offer} from '../models/Offer';
import {OfferService} from '../_service/offer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

  offers: Offer[];
  totalLength: any;
  page: number = 1;

  constructor(private offerService: OfferService, private router: Router) {
  }

  ngOnInit(): void {
    this.offerService.RetrieveOffer().subscribe(data => {
      console.log(data);
      this.offers = data;
      this.totalLength = data.length;
    });
  }

  deleteOfferById(o: Offer) {
    console.log('suppppppppppppppppppppppppppppp supprimé' + o);
    const conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.offerService.DeleteOffer(o.idOffer).subscribe(() => {
        console.log('offer supprimé');
        this.SuprimerOfferDuTableau(o);
      });
    }
  }

  SuprimerOfferDuTableau(offer: Offer) {
    this.offers.forEach((cur, index) => {
      if (offer.idOffer === cur.idOffer) {
        this.offers.splice(index, 1);
      }
    });
  }

  ExportPDF() {
    this.offerService.exportPdfOffer().subscribe(
      x => {
        const blob = new Blob([x], {type: 'application/pdf'});
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(blob);
          return;
        }
        const data = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = data;
        link.download = 'offers.pdf';
        link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));

        // tslint:disable-next-line:only-arrow-functions
        setTimeout(function() {
          window.URL.revokeObjectURL(data);
          link.remove();
        }, 100);
      });

  }

  SearchMultiple(key: string): void {

    if (key === '') {
      this.offerService.RetrieveOffer();
    } else if (key != null) {
      this.offerService.SearchMultiple(key).subscribe(
        (data: Offer[]) => {
          this.offers = data;
        }
      );
    }


  }
}

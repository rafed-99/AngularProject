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
  constructor(private offerService: OfferService, private  router: Router) { }

  ngOnInit(): void {
    this.offerService.RetrieveOffer().subscribe(data => {
      console.log(data);
      this.offers = data;
    });
  }

  deleteOfferById(o: Offer )
  {
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


}

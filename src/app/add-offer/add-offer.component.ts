import { Component, OnInit } from '@angular/core';
import {Offer} from '../models/Offer';
import { OfferService } from '../_service/offer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  newOffer = new Offer();

  message: string;

  constructor(private offerService: OfferService, private  router: Router) { }

  ngOnInit(): void {
  }

  addOffer() {
    this.offerService.addOffer(this.newOffer).subscribe(can => {
      console.log(can);

    });

    this.router.navigate(['/home/offer-management/offers']).then(() => {
      window.location.reload();
    });
  }

}

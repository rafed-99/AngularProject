import { Component, OnInit } from '@angular/core';
import {Offer} from '../models/Offer';
import {ActivatedRoute, Router} from '@angular/router';
import {OfferService} from '../_service/offer.service';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {

  currentOffer = new Offer();
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private offerService: OfferService) { }

  ngOnInit(): void { this.offerService.consulterOffer(this.activatedRoute.snapshot.params.id).
  subscribe( prod => { this.currentOffer = prod; });
  }


  updateOffer() {
    this.offerService.updateOffer(this.currentOffer).subscribe(() => {
        this.router.navigate(['offers']);
      }, (error) => { alert('Problème lors de la modification !'); }
    );
  }

}

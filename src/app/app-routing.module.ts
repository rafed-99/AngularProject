import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbonementComponent } from './backoffice/abonement/abonement.component';
import { AddabonementComponent } from './backoffice/addabonement/addabonement.component';
import { HooomeComponent } from './backoffice/hooome/hooome.component';
import { UpdateabonementComponent } from './backoffice/updateabonement/updateabonement.component';
import {OfferListComponent} from './offer-list/offer-list.component';
import {AddOfferComponent} from './add-offer/add-offer.component';
import {UpdateOfferComponent} from './update-offer/update-offer.component';
import {LayoutComponent} from './frontoffice/layout/layout.component';
import {HoomeComponent} from './frontoffice/hoome/hoome.component';
import {AbonnementfrontComponent} from './frontoffice/abonnementfront/abonnementfront.component';
import {CandidacyListComponent} from './candidacy-list/candidacy-list.component';
import {AddCandidacyComponent} from './add-candidacy/add-candidacy.component';
import {UpdateCandidacyComponent} from './update-candidacy/update-candidacy.component';



const routes: Routes = [


  {path: '', component: HooomeComponent},
  {path:'oo',component: LayoutComponent },
  {
    path: 'front',
    component: LayoutComponent,
    children: [
      {
        path: 'frontEnd',
        children: [
          { path: 'homeF', component: HoomeComponent },
          { path: 'abonementfront', component: AbonnementfrontComponent },
          { path: 'candidacys', component: CandidacyListComponent },
          { path: 'addCandidacy', component: AddCandidacyComponent },
          { path: 'updateCandidacy/:id', component: UpdateCandidacyComponent },

        ]
      },
    ]
  },
  {
    path: 'home',
    component: HooomeComponent,
    children: [
      {
      path: 'abonement-management',
      children: [
      {path : 'abonement', component : AbonementComponent},
      {path: 'addabonement', component : AddabonementComponent},
      {path: 'updateabonement/:id', component: UpdateabonementComponent},
    ]
      },
      {
        path: 'offer-management',
        children: [
          {path : 'offers', component : OfferListComponent},
          {path : 'addOffer', component : AddOfferComponent},
          {path: 'updateOffer/:id', component: UpdateOfferComponent},

        ]
      },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

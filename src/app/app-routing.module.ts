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
import {TrainingComponent} from "./training/training.component";
import {AddTrainingComponent} from "./add-training/add-training.component";
import {UpdateTrainingComponent} from "./update-training/update-training.component";
import {QuizComponent} from "./quiz/quiz.component";
import {AddQuizComponent} from "./add-quiz/add-quiz.component";
import {UpdateQuizComponent} from "./update-quiz/update-quiz.component";



const routes: Routes = [


  {path: '', component: HooomeComponent},
  {path: 'oo', component: LayoutComponent },
  {
    path: 'front',
    component: LayoutComponent,
    children: [
      {
        path: 'frontEnd',
        children: [
          { path: 'homeF', component: HoomeComponent },
          { path: 'abonementfront', component: AbonnementfrontComponent },

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
      {
        path: 'training',
        children: [
          {path : 'trainings', component : TrainingComponent},
          {path : 'addTraining', component : AddTrainingComponent},
          {path: 'updateTraining/:id', component: UpdateTrainingComponent},

        ]
      },
      {
        path: 'quiz',
        children: [
          {path : 'quizs', component : QuizComponent},
          {path : 'addQuiz', component : AddQuizComponent},
          {path: 'updateQuiz/:id', component: UpdateQuizComponent},

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

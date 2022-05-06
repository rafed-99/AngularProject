import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbonementComponent } from './backoffice/abonement/abonement.component';
import { AddabonementComponent } from './backoffice/addabonement/addabonement.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateabonementComponent } from './backoffice/updateabonement/updateabonement.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { SidebarComponent } from './backoffice/sidebar/sidebar.component';
import { HeaderComponent } from './backoffice/header/header.component';
import { FooterComponent } from './backoffice/footer/footer.component';
import { HooomeComponent } from './backoffice/hooome/hooome.component';
import { ContentComponent } from './content/content.component';
import {AdminDashLayoutComponent} from './backoffice/admin-dash-layout/admin-dash-layout.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LayoutComponent } from './frontoffice/layout/layout.component';
import { NavbarComponent } from './frontoffice/navbar/navbar.component';
import { HoomeComponent } from './frontoffice/hoome/hoome.component';
import { HeaderfComponent } from './frontoffice/headerf/headerf.component';
import { FooterfComponent } from './frontoffice/footerf/footerf.component';
import { AbonnementfrontComponent } from './frontoffice/abonnementfront/abonnementfront.component';
import { TrainingComponent } from './training/training.component';
import { AddTrainingComponent } from './add-training/add-training.component';
import { UpdateTrainingComponent } from './update-training/update-training.component';
import { QuizComponent } from './quiz/quiz.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './update-quiz/update-quiz.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    AbonementComponent,
    AddabonementComponent,
    UpdateabonementComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    HooomeComponent,
    ContentComponent,
    AdminDashLayoutComponent,
    OfferListComponent,
    AddOfferComponent,
    UpdateOfferComponent,
    LayoutComponent,
    NavbarComponent,
    HoomeComponent,
    HeaderfComponent,
    FooterfComponent,
    AbonnementfrontComponent,
    TrainingComponent,
    AddTrainingComponent,
    UpdateTrainingComponent,
    QuizComponent,
    AddQuizComponent,
    UpdateQuizComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxQRCodeModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
export class AppModule { }

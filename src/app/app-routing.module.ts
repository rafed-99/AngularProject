import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbonementComponent } from './backoffice/abonement/abonement.component';
import { AddabonementComponent } from './backoffice/addabonement/addabonement.component';
import { HooomeComponent } from './backoffice/hooome/hooome.component';
import { UpdateabonementComponent } from './backoffice/updateabonement/updateabonement.component';



const routes: Routes = [


  {path: '', component: HooomeComponent},
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
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

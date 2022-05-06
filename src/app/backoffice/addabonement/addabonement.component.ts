import { Component, VERSION } from '@angular/core';
import { Abonement } from '../../models/abonement';
import { AbonementService } from '../../_service/abonement.service';
import { Router } from '@angular/router';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-addabonement',
  templateUrl: './addabonement.component.html',
  styleUrls: ['./addabonement.component.css']
})
export class AddabonementComponent {

  newAbonement = new Abonement();
  message :string;
  siteKey :string ;

  constructor(private _service : AbonementService,
    private router :Router ,private formBuilder: FormBuilder) {
    this.siteKey = '6Lcp4MofAAAAAJyiR_LP6kPc70tURDH6DRCL9j1B';
           }

  ngOnInit(): void {

  }

  addAbonement(){
    this._service.addAbonement(this.newAbonement).subscribe(abon => {
    console.log(abon);

    });

    this.router.navigate(['/home/abonement-management/abonement']).then(() => {
      window.location.reload();

      });

}

}

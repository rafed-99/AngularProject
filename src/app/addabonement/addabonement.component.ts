import { Component, OnInit } from '@angular/core';
import { Abonement } from '../models/abonement';
import { AbonementService } from '../_service/abonement.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addabonement',
  templateUrl: './addabonement.component.html',
  styleUrls: ['./addabonement.component.css']
})
export class AddabonementComponent implements OnInit {

  newAbonement = new Abonement();
  message :string;
  constructor(private _service : AbonementService,
    private router :Router) { }

  ngOnInit(): void {
  }

  addAbonement(){
    this._service.addAbonement(this.newAbonement).subscribe(abon => {
    console.log(abon);
  
    });

    this.router.navigate(['abonement']).then(() => {
      window.location.reload();
      });
 
}
}

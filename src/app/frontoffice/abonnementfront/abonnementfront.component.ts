import { Component, OnInit } from '@angular/core';
import {Abonement} from '../../models/abonement';
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from 'ngx-qrcode2';
import {AbonementService} from '../../_service/abonement.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-abonnementfront',
  templateUrl: './abonnementfront.component.html',
  styleUrls: ['./abonnementfront.component.css']
})
export class AbonnementfrontComponent implements OnInit {
  abonements: Abonement[];
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  totalLength: any;
  page: number = 1;

  constructor(private _service:AbonementService , private router :Router) { }

  ngOnInit(): void {
    this._service.retrieveabonement().subscribe(abon => {
      console.log(abon);
      this.abonements = abon;
      this.totalLength = abon.length;
    });
  }
  SearchMultiple(key:string): void
  {
    if (key=='') {
      this._service.retrieveabonement()
    }
    else if (key!=null)
    {
      this._service.SearchMultiple(key).subscribe(
        (data: Abonement[]) => {
          this.abonements = data
        }
      );
    }

  }
}

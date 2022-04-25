import { Component, OnInit } from '@angular/core';
import { Abonement } from '../models/abonement';
import { AbonementService } from '../_service/abonement.service';
import { Router } from '@angular/router';
import { UpdateabonementComponent } from '../backoffice/updateabonement/updateabonement.component';

@Component({
  selector: 'app-abonement',
  templateUrl: './abonement.component.html',
  styleUrls: ['./abonement.component.css']
})
export class AbonementComponent implements OnInit {
  abonements: Abonement[];

  constructor(private _service:AbonementService , private router :Router) { }

  ngOnInit(): void {
    this._service.retrieveabonement().subscribe(abon => {
      console.log(abon);
      this.abonements = abon;
      });
      
  }

  supprimerAbonement(a: Abonement)
{
  console.log("suppppppppppppppppppppppppppppp supprimé"+a);
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this._service.supprimerAbonement(a.idSubscription).subscribe(() => {
  console.log("produit supprimé");
  this.SuprimerAbonementDuTableau(a);
});
}

SuprimerAbonementDuTableau(abon : Abonement) {
  this.abonements.forEach((cur, index) => {
  if(abon.idSubscription=== cur.idSubscription) {
  this.abonements.splice(index, 1);
  }
  });
  }

  
}

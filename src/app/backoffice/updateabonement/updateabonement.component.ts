import { Component, OnInit } from '@angular/core';
import { Abonement } from '../../models/abonement';
import { ActivatedRoute,Router } from '@angular/router';
import { AbonementService } from '../../_service/abonement.service';

@Component({
  selector: 'app-updateabonement',
  templateUrl: './updateabonement.component.html',
  styleUrls: ['./updateabonement.component.css']
})
export class UpdateabonementComponent implements OnInit {

  currentAbonement = new Abonement();
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private _service: AbonementService) { }

  ngOnInit(): void {
    this._service.consulterAbonement(this.activatedRoute.snapshot.params.id).
    subscribe( abon =>{ this.currentAbonement = abon; });
  }

 
  updateAbonement() {
    this._service.updateAbonement(this.currentAbonement).subscribe(() => {
    this.router.navigate(['/home/abonement-management/abonement']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

}

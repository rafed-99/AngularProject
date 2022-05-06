import { Component, OnInit } from '@angular/core';
import {Candidacy} from "../models/Candidacy";
import {ActivatedRoute, Router} from "@angular/router";
import {CandidacyService} from "../_service/candidacy.service";

@Component({
  selector: 'app-update-candidacy',
  templateUrl: './update-candidacy.component.html',
  styleUrls: ['./update-candidacy.component.css']
})
export class UpdateCandidacyComponent implements OnInit {
  currentCandidacy = new Candidacy();
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private candidacyService: CandidacyService) { }

  ngOnInit(): void {
    this.candidacyService.consulterCandidacy(this.activatedRoute.snapshot.params.id).
    subscribe( prod => { this.currentCandidacy = prod; });
  }


  updateCandidacy() {
    this.candidacyService.updateCandidacy(this.currentCandidacy).subscribe(() => {
        this.router.navigate(['/front/frontEnd/candidacys']);
      }, (error) => { alert('Problème lors de la modification !'); }
    );
  }

}

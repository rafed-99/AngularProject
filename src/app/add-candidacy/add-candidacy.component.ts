import { Component, OnInit } from '@angular/core';
import {CandidacyService} from '../_service/candidacy.service';
import {Router} from "@angular/router";
import {Candidacy} from "../models/Candidacy";

@Component({
  selector: 'app-add-candidacy',
  templateUrl: './add-candidacy.component.html',
  styleUrls: ['./add-candidacy.component.css']
})
export class AddCandidacyComponent implements OnInit {
  newCandidacy = new Candidacy();

  message: string;
  userFile;
  public imagePath;
  imgURL: any;


  constructor(private candidacyService: CandidacyService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addCandidacy() {
    this.candidacyService.addCandidacy(this.newCandidacy).subscribe(can => {
      console.log(can);

    });

    this.router.navigate(['/front/frontEnd/candidacys']).then(() => {
      window.location.reload();
    });
  }
}

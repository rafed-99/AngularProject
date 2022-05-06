import { Component, OnInit } from '@angular/core';
import {Candidacy} from '../models/Candidacy';
import {CandidacyService} from '../_service/candidacy.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-candidacy-list',
  templateUrl: './candidacy-list.component.html',
  styleUrls: ['./candidacy-list.component.css']
})
export class CandidacyListComponent implements OnInit {
  candidacies: Candidacy[];

  constructor(private candidacyService: CandidacyService, private router: Router) {
  }

  ngOnInit(): void {
    this.candidacyService.RetrieveCandidacy().subscribe(data => {
      console.log(data);
      this.candidacies = data;
    });
  }

  deleteCandidacyById(c: Candidacy) {
    console.log('suppppppppppppppppppppppppppppp supprimé' + c);
    const conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.candidacyService.DeleteCandidacy(c.idCandidacy).subscribe(() => {
        console.log('Candidacy supprimé');
        this.SuprimerCandidacyDuTableau(c);
      });
    }
  }

  SuprimerCandidacyDuTableau(candidacy: Candidacy) {
    this.candidacies.forEach((cur, index) => {
      if (candidacy.idCandidacy === cur.idCandidacy) {
        this.candidacies.splice(index, 1);
      }
    });
  }


  public exportExcel() {
    this.candidacyService.exportExcel().subscribe(
      x => {
        const blob = new Blob([x], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,'});
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(blob);
          return;
        }
        const data = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = data;
        link.download = 'candidacies.xlsx';
        link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
        // tslint:disable-next-line:only-arrow-functions
        setTimeout(function() {
          window.URL.revokeObjectURL(data);
          link.remove();
        }, 100);
      });

  }
}

import { Component, OnInit } from '@angular/core';
import { Mural } from '../../models/mural';
import { MuralService } from '../../services/mural.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-mural-detail',
  templateUrl: './mural-detail.component.html',
  styleUrls: ['./mural-detail.component.css']
})
export class MuralDetailComponent implements OnInit {
  mural: Mural;

  constructor(private muralService: MuralService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getMural();
  }

  getMural(): void {
    this.route.params.subscribe((params) => {
      this.muralService.getMurals()
      .subscribe(
        resultArray => {
          this.mural = resultArray.find(m => m.id === +params['id']);
        },
        error => console.error('Error :: ' + error)
      );
    });
  }
}

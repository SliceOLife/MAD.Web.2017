import { Component, OnInit } from '@angular/core';

import { Mural } from '../../models/mural';
import { MuralService } from '../../services/mural.service';

@Component({
  selector: 'app-murals',
  templateUrl: './murals.component.html',
  styleUrls: ['./murals.component.css']
})
export class MuralsComponent implements OnInit {
  _murals: Mural[];

  constructor(private muralService: MuralService) { }

  getMurals(): void {
    this.muralService.getMurals()
      .subscribe(
        resultArray => this._murals = resultArray,
        error => console.error('Error :: ' + error)
      );
  }

  ngOnInit(): void {
    this.getMurals();
  }
}

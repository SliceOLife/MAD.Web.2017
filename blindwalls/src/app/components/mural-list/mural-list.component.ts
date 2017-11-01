import { Component, OnInit } from '@angular/core';

import { Mural } from '../../models/mural';
import { MuralService } from '../../services/mural.service';

@Component({
  selector: 'app-mural-list',
  templateUrl: './mural-list.component.html',
  styleUrls: ['./mural-list.component.css']
})
export class MuralListComponent implements OnInit {
  _murals: Mural[];
  selectedMural: Mural;

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

    onSelect(mural: Mural): void {
      this.selectedMural = mural;
    }

}

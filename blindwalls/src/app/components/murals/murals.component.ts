import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mural } from '../../models/mural';
import { MuralService } from '../../services/mural.service';

@Component({
  selector: 'app-murals',
  templateUrl: './murals.component.html',
  styleUrls: ['./murals.component.css']
})
export class MuralsComponent implements OnInit {
  _murals: Mural[];

  constructor(private muralService: MuralService, private router: Router) { }

  getMurals(): void {
    this.muralService.getMurals()
      .subscribe(
        resultArray => this.handleMuralData(resultArray),
        error => console.error('Error :: ' + error)
      );
  }

  handleMuralData(data): void {
    this._murals = data;
    this.setFrontPageImage();
  }

  gotoDetail(id): void {
    this.router.navigate(['/mural', id]);
  }

  setFrontPageImage(): void {
    if (this._murals.length > 0) {
      this._murals.forEach(element => {
        element.frontPageImage = element.images.find(imgElem => imgElem.type === 'frontpage');
      });
    }
  }

  ngOnInit(): void {
    this.getMurals();
  }
}

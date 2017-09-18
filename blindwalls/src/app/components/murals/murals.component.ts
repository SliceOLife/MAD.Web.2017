import { Component, OnInit } from '@angular/core';

import { Mural }             from '../../models/mural'
import { MuralService }      from '../../services/mural.service'

@Component({
  selector: 'app-murals',
  templateUrl: './murals.component.html',
  styleUrls: ['./murals.component.css']
})
export class MuralsComponent implements OnInit {
  murals: Mural[];

  constructor(private muralService: MuralService) { }

  transformMurals(data: any[]): void {
    console.log(data);
  }

  getMurals(): void {
    this.muralService
        .getMurals()
        .then(murals => this.transformMurals(murals));
  }

  getMuralsNew(): void {
    console.log(this.muralService.getMuralsNew());
  }

  ngOnInit() {
    this.getMu();
  }

}

import { Component, OnInit } from '@angular/core';
import { MuralService } from './services/mural.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'BlindWalls Gallery';

  constructor(private muralService: MuralService) {
  }

  ngOnInit(): void {
    this.retrieveAndStoreMurals();
  }

  private retrieveAndStoreMurals(): void {
    this.muralService.getMurals();
  }
}

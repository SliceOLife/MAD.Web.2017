import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mural-card',
  templateUrl: './mural-card.component.html',
  styleUrls: ['./mural-card.component.css']
})
export class MuralCardComponent implements OnInit {
  @Input() location: String;
  @Input() imageUri: String;

  constructor() { }

  ngOnInit() {
  }

}

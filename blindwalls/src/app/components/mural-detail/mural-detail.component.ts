import { Component, Input } from '@angular/core';
import { Mural }            from '../../models/mural';

@Component({
  selector: 'app-mural-detail',
  templateUrl: './mural-detail.component.html',
  styleUrls: ['./mural-detail.component.css']
})
export class MuralDetailComponent {
  @Input() mural: Mural;
}

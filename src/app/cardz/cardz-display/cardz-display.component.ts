import { Component, Input } from '@angular/core';
import { Cardz } from 'src/app/models/cardz';

@Component({
  selector: 'app-cardz-display',
  templateUrl: './cardz-display.component.html',
  styleUrls: ['./cardz-display.component.scss']
})
export class CardzDisplayComponent {
  @Input() userCard!: Cardz;
}

import {Component, Input} from '@angular/core';
import {Card} from "../models/card";

@Component({
  selector: 'app-cardz',
  templateUrl: './cardz.component.html',
  styleUrls: ['./cardz.component.scss']
})
export class CardzComponent {
  @Input()
  userCard!: Card;
}

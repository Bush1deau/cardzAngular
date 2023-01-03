import {Component, Input} from '@angular/core';
import {CardzLink} from "../../models/cardz-link";

@Component({
  selector: 'app-cardz-link',
  templateUrl: './cardz-link.component.html',
  styleUrls: ['./cardz-link.component.scss']
})
export class CardzLinkComponent {
  @Input()
  cardzLink!: CardzLink;
}

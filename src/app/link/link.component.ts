import {Component, Input} from '@angular/core';
import {Link} from "../models/link";

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input()
  link!: Link;
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardzService } from 'src/app/shared/data-access/cardz.service';
import { Cardz } from 'src/app/shared/types/cardz';

@Component({
  selector: 'app-cardz-view-all',
  templateUrl: './cardz-view-all.component.html',
  styleUrls: ['./cardz-view-all.component.scss']
})
export class CardzViewAllComponent implements OnInit {
  userCards$?: Observable<Cardz[]>;

  constructor(private cardService:CardzService){
  }
  ngOnInit(): void {
    this.userCards$ = this.cardService.getCardAll()
  }

  deleteCard(id :number):void{
    this.cardService.deleteCard(id).subscribe((result:Cardz)=>{
      this.userCards$ = this.cardService.getCardAll()
    });
    
    console.log("Delete ok")
  }
}


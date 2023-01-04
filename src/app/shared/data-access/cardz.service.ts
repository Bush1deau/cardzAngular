import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cardz } from "../types/cardz";

@Injectable({
  providedIn: 'root'
})
export class CardzService {

  constructor(private http:HttpClient){

  }
  getCardById(id: Number): Observable<Cardz> {
    return this.http.get<Cardz>(`http://localhost:8080/cardz/${id}`)
  }
  getCardAll():Observable<Cardz[]>{
    return this.http.get<Cardz[]>(`http://localhost:8080/cardz`)
  }
  deleteCard(id: Number):void{
    this.http.delete(`http://localhost:8080/cardz${id}`)
  }
}

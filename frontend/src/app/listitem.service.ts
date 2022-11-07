import { Injectable } from '@angular/core';
import { Listitem} from "./listitem";
import {TASKS} from "./mock-tasks";
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListitemService {
  // private itemsUrl = ???
  constructor(
    private http: HttpClient) { }

  getListitems(): Observable<Listitem[]> {
    const listitem = of(TASKS);
    return listitem;
    // hier muss der Aufruf des Backend rein -> ganze Liste von Aufgaben
    // return this.http.get<Listitem[]>(this.itemsUrl);
  }

  getListitem(id:number): Observable<Listitem> {
    const listitem = TASKS.find(t => t.id === id)!;
    return of(listitem);
    // hier muss der Aufruf des Backend rein -> einzelne Aufgaben
  }
}

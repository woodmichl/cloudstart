import {Component, OnInit} from '@angular/core';
import {ListitemService} from "../listitem.service";
import {Listitem} from "../listitem";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  devMode = false;

  addedItem: Listitem = {id: 0, name: "", content: "", done: false}

  listitems: Listitem[] = [];

  constructor(private listService: ListitemService,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getListitems();
  }


  getListitems(): void {
    this.listService.getListitems()
      .subscribe(listitems => this.listitems = listitems);
  }

  delete(listitem: Listitem): void {
    this.http.delete("/api/todo/"+listitem.id).subscribe(()=>this.getListitems())
    //delete from Database
  }

  logItems(){
    console.log(this.listitems)
  }

  updateItem(changedItem: Listitem) {
    this.http.patch("/api/todo/"+changedItem.id,changedItem).subscribe(()=> {
      this.getListitems()
    })
  }
  createTodo() {
    this.http.post<Listitem>("/api/todo",this.addedItem).subscribe(()=>this.getListitems())
    this.addedItem = {id: 0, name: "", content: "", done: false}
  }
}

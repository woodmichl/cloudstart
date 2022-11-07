import { Component, OnInit } from '@angular/core';
import { Listitem } from "../listitem";
import { ListitemService} from "../listitem.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listitems: Listitem[] = [];

  constructor(private listService: ListitemService) { }

  ngOnInit(): void {
    this.getListitems();
  }

  getListitems(): void {
    this.listService.getListitems()
      .subscribe(listitems => this.listitems = listitems);
  }

  delete(listitem: Listitem):void{
    //delete from Database
  }
}



import { Component, OnInit } from '@angular/core';
import { Listitem} from "../listitem";
import { ListitemService} from "../listitem.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  listitems: Listitem[] = [];

  constructor(private listService: ListitemService) { }

  ngOnInit(): void {
    this.getListitems();
  }

  getListitems(): void {
    this.listService.getListitems()
      .subscribe(listitems => this.listitems = listitems.slice(1, 5));
  }
}

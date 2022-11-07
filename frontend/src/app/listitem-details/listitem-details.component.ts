import {Component, Input, OnInit} from '@angular/core';
import { Listitem } from "../listitem";
import {ActivatedRoute} from "@angular/router";
import { Location} from "@angular/common";
import { ListitemService} from "../listitem.service";

@Component({
  selector: 'app-listitem-details',
  templateUrl: './listitem-details.component.html',
  styleUrls: ['./listitem-details.component.css']
})
export class ListitemDetailsComponent implements OnInit {
  listitem: Listitem | undefined;
  constructor(
    private route: ActivatedRoute,
    private listService: ListitemService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getItem();
  }

  // @Input() listitem?: Listitem;

  getItem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getListitem(id)
      .subscribe(listitem => this.listitem = listitem);
  }

  goBack(): void {
    this.location.back();
  }

  delete(listitem: Listitem):void{
    //delete from Database
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from './list/list.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ListitemDetailsComponent} from "./listitem-details/listitem-details.component";

const routes: Routes = [
  { path: 'todo', component: ListComponent },
  // { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: 'todo/:id', component: ListitemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



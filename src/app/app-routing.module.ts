import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchIncidentsComponent } from "./search-incidents/search-incidents.component";
import { MaintenanceNewJobComponent } from "./maintenance/maintenance-new-job/maintenance-new-job.component";
import { MaintenanceSearchComponent } from "./maintenance/maintenance-search/maintenance-search.component";


const routes: Routes = [
  { path:'searchincidents', component: SearchIncidentsComponent},
  { path:'newjobmaintenance', component: MaintenanceNewJobComponent},
  { path:'maintenancesearch', component: MaintenanceSearchComponent}
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

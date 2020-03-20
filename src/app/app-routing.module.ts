import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCarsComponent } from './list.cars/list.cars.component';
import { ConfigComponent } from './config.parking/config.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'config',
    component: ConfigComponent
  },
  {
    path: 'list',
    component: ListCarsComponent
  },
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

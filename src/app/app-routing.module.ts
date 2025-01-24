import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlantsComponent } from './plants/plants.component';
import { SystemComponent } from './system/system.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:"home",component:HomeComponent},
  {path:"plants",component:PlantsComponent},
  {path:"system",component:SystemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimaliaComponent } from './animalia/animalia.component';
import { FungoComponent } from './fungo/fungo.component';
import { HomeComponent } from './home/home.component';
import { MoneraComponent } from './monera/monera.component';
import { PlantaeComponent } from './plantae/plantae.component';
import { ProtistaComponent } from './protista/protista.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "animalia", component: AnimaliaComponent},
  {path: "plantae", component: PlantaeComponent},
  {path: "fungo", component: FungoComponent},
  {path: "monera", component: MoneraComponent},
  {path: "protista", component: ProtistaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

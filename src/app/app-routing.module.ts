import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnelideosComponent } from './animalia/anelideos/anelideos.component';
import { AnimaliaComponent } from './animalia/animalia.component';
import { ArtropodesComponent } from './animalia/artropodes/artropodes.component';
import { CnidariosComponent } from './animalia/cnidarios/cnidarios.component';
import { CordadosComponent } from './animalia/cordados/cordados.component';
import { EquinodermosComponent } from './animalia/equinodermos/equinodermos.component';
import { MoluscosComponent } from './animalia/moluscos/moluscos.component';
import { NematelmintosComponent } from './animalia/nematelmintos/nematelmintos.component';
import { PlatelmintosComponent } from './animalia/platelmintos/platelmintos.component';
import { PoriferosComponent } from './animalia/poriferos/poriferos.component';
import { FungoComponent } from './fungo/fungo.component';
import { GlossarioComponent } from './glossario/glossario.component';
import { HomeComponent } from './home/home.component';
import { MoneraComponent } from './monera/monera.component';
import { AngiospermasComponent } from './plantae/angiospermas/angiospermas.component';
import { BriofitasComponent } from './plantae/briofitas/briofitas.component';
import { GimnospermasComponent } from './plantae/gimnospermas/gimnospermas.component';
import { PlantaeComponent } from './plantae/plantae.component';
import { PteridofitasComponent } from './plantae/pteridofitas/pteridofitas.component';
import { ProtistaComponent } from './protista/protista.component';



const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "animalia", component: AnimaliaComponent},
  {path: "plantae", component: PlantaeComponent},
  {path: "fungo", component: FungoComponent},
  {path: "monera", component: MoneraComponent},
  {path: "protista", component: ProtistaComponent},
  {path: "glossario", component: GlossarioComponent},
  //animalia
  {path: "poriferos", component: PoriferosComponent},
  {path: "cnidarios", component: CnidariosComponent},
  {path: "platelmintos", component: PlatelmintosComponent},
  {path: "nematelmintos", component: NematelmintosComponent},
  {path: "cordados", component: CordadosComponent},
  {path: "anelideos", component: AnelideosComponent},
  {path: "artropodes", component: ArtropodesComponent},
  {path: "moluscos", component: MoluscosComponent},
  {path: "equinodermos", component: EquinodermosComponent},
  //plantae
  {path: "briofitas", component: BriofitasComponent},
  {path: "pteridofitas", component: PteridofitasComponent},
  {path: "gimnospermas", component: GimnospermasComponent},
  {path: "angiospermas", component: AngiospermasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

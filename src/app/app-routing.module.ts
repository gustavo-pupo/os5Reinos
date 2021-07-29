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
import { AscomicetosComponent } from './fungo/ascomicetos/ascomicetos.component';
import { BasidiomicetosComponent } from './fungo/basidiomicetos/basidiomicetos.component';
import { FungoComponent } from './fungo/fungo.component';
import { GlomeromicetosComponent } from './fungo/glomeromicetos/glomeromicetos.component';
import { QuitridiosComponent } from './fungo/quitridios/quitridios.component';
import { ZigomicetosComponent } from './fungo/zigomicetos/zigomicetos.component';
import { GlossarioComponent } from './glossario/glossario.component';
import { HomeComponent } from './home/home.component';
import { ArqueobacteriasComponent } from './monera/arqueobacterias/arqueobacterias.component';
import { EubacteriasComponent } from './monera/eubacterias/eubacterias.component';
import { MoneraComponent } from './monera/monera.component';
import { AngiospermasComponent } from './plantae/angiospermas/angiospermas.component';
import { BriofitasComponent } from './plantae/briofitas/briofitas.component';
import { GimnospermasComponent } from './plantae/gimnospermas/gimnospermas.component';
import { PlantaeComponent } from './plantae/plantae.component';
import { PteridofitasComponent } from './plantae/pteridofitas/pteridofitas.component';
import { CilioforosComponent } from './protista/cilioforos/cilioforos.component';
import { ClorofitasComponent } from './protista/clorofitas/clorofitas.component';
import { CrisofitasComponent } from './protista/crisofitas/crisofitas.component';
import { EsporozoariosComponent } from './protista/esporozoarios/esporozoarios.component';
import { EuglenofitasComponent } from './protista/euglenofitas/euglenofitas.component';
import { MastigoforosComponent } from './protista/mastigoforos/mastigoforos.component';
import { MixomicetosComponent } from './protista/mixomicetos/mixomicetos.component';
import { PhaeophytasComponent } from './protista/phaeophytas/phaeophytas.component';
import { PirrofitasComponent } from './protista/pirrofitas/pirrofitas.component';
import { ProtistaComponent } from './protista/protista.component';
import { RizopodesComponent } from './protista/rizopodes/rizopodes.component';
import { RodofitasComponent } from './protista/rodofitas/rodofitas.component';



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
  //bacterias
  {path: "arqueobacterias", component: ArqueobacteriasComponent},
  {path: "eubacterias", component: EubacteriasComponent},
  //fungi
  {path: "quitridios", component: QuitridiosComponent},
  {path: "zigomicetos", component: ZigomicetosComponent},
  {path: "glomeromicetos", component: GlomeromicetosComponent},
  {path: "ascomicetos", component: AscomicetosComponent},
  {path: "basidiomicetos", component: BasidiomicetosComponent},
  //protista
  {path: "crisofitas", component: CrisofitasComponent},
  {path: "pirrofitas", component: PirrofitasComponent},
  {path: "euglenofitas", component: EuglenofitasComponent},
  {path: "clorofitas", component: ClorofitasComponent},
  {path: "rodofitas", component: RodofitasComponent},
  {path: "phaeophytas", component: PhaeophytasComponent},
  {path: "rizopodes", component: RizopodesComponent},
  {path: "mastigoforos", component: MastigoforosComponent},
  {path: "cilioforos", component: CilioforosComponent},
  {path: "esporozoarios", component: EsporozoariosComponent},
  {path: "mixomicetos", component: MixomicetosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

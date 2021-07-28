import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimaliaComponent } from './animalia/animalia.component';
import { HomeComponent } from './home/home.component';
import { PlantaeComponent } from './plantae/plantae.component';
import { MoneraComponent } from './monera/monera.component';
import { FungoComponent } from './fungo/fungo.component';
import { ProtistaComponent } from './protista/protista.component';
import { GlossarioComponent } from './glossario/glossario.component';
import { PoriferosComponent } from './animalia/poriferos/poriferos.component';
import { CnidariosComponent } from './animalia/cnidarios/cnidarios.component';
import { PlatelmintosComponent } from './animalia/platelmintos/platelmintos.component';
import { NematelmintosComponent } from './animalia/nematelmintos/nematelmintos.component';
import { CordadosComponent } from './animalia/cordados/cordados.component';
import { AnelideosComponent } from './animalia/anelideos/anelideos.component';
import { MoluscosComponent } from './animalia/moluscos/moluscos.component';
import { ArtropodesComponent } from './animalia/artropodes/artropodes.component';
import { EquinodermosComponent } from './animalia/equinodermos/equinodermos.component';
import { BriofitasComponent } from './plantae/briofitas/briofitas.component';
import { PteridofitasComponent } from './plantae/pteridofitas/pteridofitas.component';
import { GimnospermasComponent } from './plantae/gimnospermas/gimnospermas.component';
import { AngiospermasComponent } from './plantae/angiospermas/angiospermas.component';
import { ArqueobacteriasComponent } from './monera/arqueobacterias/arqueobacterias.component';
import { EubacteriasComponent } from './monera/eubacterias/eubacterias.component';
import { QuitridiosComponent } from './fungo/quitridios/quitridios.component';
import { ZigomicetosComponent } from './fungo/zigomicetos/zigomicetos.component';
import { GlomeromicetosComponent } from './fungo/glomeromicetos/glomeromicetos.component';
import { AscomicetosComponent } from './fungo/ascomicetos/ascomicetos.component';
import { BasidiomicetosComponent } from './fungo/basidiomicetos/basidiomicetos.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimaliaComponent,
    HomeComponent,
    PlantaeComponent,
    MoneraComponent,
    FungoComponent,
    ProtistaComponent,
    GlossarioComponent,
    PoriferosComponent,
    CnidariosComponent,
    PlatelmintosComponent,
    NematelmintosComponent,
    CordadosComponent,
    AnelideosComponent,
    MoluscosComponent,
    ArtropodesComponent,
    EquinodermosComponent,
    BriofitasComponent,
    PteridofitasComponent,
    GimnospermasComponent,
    AngiospermasComponent,
    ArqueobacteriasComponent,
    EubacteriasComponent,
    QuitridiosComponent,
    ZigomicetosComponent,
    GlomeromicetosComponent,
    AscomicetosComponent,
    BasidiomicetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

@NgModule({
  declarations: [
    AppComponent,
    AnimaliaComponent,
    HomeComponent,
    PlantaeComponent,
    MoneraComponent,
    FungoComponent,
    ProtistaComponent,
    GlossarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

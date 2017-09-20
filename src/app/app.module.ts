import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//RUTAS
import {APP_ROUTING} from './app.routes';


//SERVICIOS
import { AvesService } from './servicios/aves.service';
import { PaisesService } from './servicios/paises.service';


//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AveComponent } from './components/ave/ave.component';
import { Http, HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AveComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    FormsModule
  ],
  providers: [
    AvesService,
    PaisesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

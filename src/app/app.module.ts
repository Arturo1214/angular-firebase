import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ProveedoresService} from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import {Routes, RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import {PresupuestosService} from './servicios/presupuestos.service';
import {HttpModule} from '@angular/http';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'addprovee', component: AddproveeComponent},
  {path: 'presupuestos', component: PresupuestosComponent},
  {path: 'addpres', component: AddpresComponent},
  {path: 'editpres/:id', component: EditpresComponent},
  {path: '**', component: InicioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProveedoresService, PresupuestosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

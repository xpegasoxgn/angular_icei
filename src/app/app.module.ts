import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ MatToolbarModule } from "@angular/material/toolbar";
import{ MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTable, MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MainLayoutComponent } from './components/pages/main-layout/main-layout.component';
import { TopBarComponent } from './components/pages/top-bar/top-bar.component';
import { SideBarComponent } from './components/pages/side-bar/side-bar.component';
import { FormularioComponent } from './components/pages/formulario/formulario.component';
import { ListarComponent } from './components/crud/listar/listar.component';
import { CrearComponent } from './components/crud/crear/crear.component';

import { HttpClientModule } from '@angular/common/http';
import { FormReactivoComponent } from './components/form-reactivo/form-reactivo.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { RxJsEjemploComponent } from './components/pages/rx-js-ejemplo/rx-js-ejemplo.component';
import { LoginComponent } from './components/login/login.component';
import { AddProductModalComponent } from './components/add-product-modal/add-product-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    HomeComponent,
    MainLayoutComponent,
    TopBarComponent,
    SideBarComponent,
    FormularioComponent,
    ListarComponent,
    CrearComponent,
    FormReactivoComponent,
    DetalleProductoComponent,
    RxJsEjemploComponent,
    LoginComponent,
    AddProductModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatNavList,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatExpansionModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HomeComponent } from './components/pages/home/home.component';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { TopBarComponent } from './components/layout/top-bar/top-bar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FormularioComponent } from './components/pages/formulario/formulario.component';
import { ListarComponent } from './components/pages/crud/listar/listar.component';
import { CrearComponent } from './components/pages/crud/crear/crear.component';
import { EditarProductoComponent } from './components/pages/crud/listar/editar-producto/editar-producto.component';
import { FormularioReactivoComponent } from './components/pages/crud/formulario-reactivo/formulario-reactivo.component';
import { DetalleProductoComponent } from './components/pages/crud/detalle-producto/detalle-producto.component';
import { RxjsEjemploComponent } from './components/pages/rxjs-ejemplo/rxjs-ejemplo.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CrearProductoComponent } from './components/pages/crud/listar/crear-producto/crear-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainLayoutComponent,
    PerfilComponent,
    TopBarComponent,
    SidebarComponent,
    FormularioComponent,
    ListarComponent,
    CrearComponent,
    EditarProductoComponent,
    FormularioReactivoComponent,
    DetalleProductoComponent,
    RxjsEjemploComponent,
    LoginComponent,
    CrearProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatFormField,
    MatInputModule,
    FormsModule,
    MatExpansionModule,
    MatTableModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

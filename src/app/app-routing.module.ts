import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FormularioComponent } from './components/pages/formulario/formulario.component';
import { ListarComponent } from './components/crud/listar/listar.component';
import { CrearComponent } from './components/crud/crear/crear.component';
import { FormReactivoComponent } from './components/form-reactivo/form-reactivo.component';
import { RxJsEjemploComponent } from './components/pages/rx-js-ejemplo/rx-js-ejemplo.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'login', component:LoginComponent},
  { path:'home', component:HomeComponent, canActivate:[authGuard]},
  { path:'perfil', component:PerfilComponent },
  { path:'formulario', component:FormularioComponent },
  { path:'crud/listar', component:ListarComponent, canActivate:[authGuard] },
  { path:'crud/crear', component:CrearComponent },
  { path:'form_reactivo/crear', component:FormReactivoComponent },
  { path:'rxjs_ejemplo', component:RxJsEjemploComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

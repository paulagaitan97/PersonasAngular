import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: PersonasComponent},
  //manejo de rutas hijas
  {path:'personas', component:PersonasComponent, children:[
    {path:'agregar',component:FormularioComponent},
    {path:':id',component:FormularioComponent},
  ]},
  {path: 'login', component:LoginComponent},
  {path: '**', component:ErrorComponent},
  
  //manejo de rutas basico
  //{path:'personas', component:PersonasComponent},
  //{path:'personas/agregar',component:FormularioComponent},
  //{path:'personas/:id',component:FormularioComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

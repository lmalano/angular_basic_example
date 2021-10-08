import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {PrincipalComponent} from './components/principal/principal.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AsideComponent } from './components/aside/aside.component';


const routes: Routes = [

  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'principal', component: PrincipalComponent},
  {path:'productos', component: ProductosComponent},
  {path:'aside', component: AsideComponent},
  { path: 'producto/:id', component: ProductoComponent },

  {path:'**', pathMatch:'full', redirectTo: 'home'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

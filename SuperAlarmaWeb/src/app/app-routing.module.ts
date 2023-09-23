import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalizarComponent } from './personalizar/personalizar.component';
import { ApagarComponent } from './apagar/apagar.component';

const routes: Routes = [
  {path: 'personalizar', component: PersonalizarComponent},
  {path: 'apagar', component: ApagarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

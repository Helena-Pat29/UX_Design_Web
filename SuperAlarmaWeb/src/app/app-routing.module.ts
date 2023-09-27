import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalizarComponent } from './personalizar/personalizar.component';
import { ApagarComponent } from './apagar/apagar.component';
import { LandingComponent } from './landing/landing.component'; // Ensure you import this

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },  // Default route
  { path: 'landing', component: LandingComponent },
  { path: 'personalizar', component: PersonalizarComponent },
  { path: 'apagar', component: ApagarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

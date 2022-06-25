import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireUserComponent } from './components/formulaire-user/formulaire-user.component';

const routes: Routes = [
  {path:"addUser",component:FormulaireUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

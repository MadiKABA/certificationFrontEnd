import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDepartementComponent } from './components/edit-departement/edit-departement.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FormulaireDepartementComponent } from './components/formulaire-departement/formulaire-departement.component';
import { FormulaireProfileComponent } from './components/formulaire-profile/formulaire-profile.component';
import { FormulaireUserComponent } from './components/formulaire-user/formulaire-user.component';
import { ListeDepartementComponent } from './components/liste-departement/liste-departement.component';
import { ListeUserComponent } from './components/liste-user/liste-user.component';
import { ProfileListeComponent } from './components/profile-liste/profile-liste.component';

const routes: Routes = [
  {path:"addUser",component:FormulaireUserComponent},
  {path:"listeUser",component:ListeUserComponent},

  {path:"liste-profiles",component:ProfileListeComponent},
  {path:"ajoute-profile",component:FormulaireProfileComponent},
  {path:"modifife-profile/:id",component:EditProfileComponent},


  {path:"liste-departement",component:ListeDepartementComponent},
  {path:"ajout-departement",component:FormulaireDepartementComponent},
  {path:"modifife-departement/:id",component:EditDepartementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

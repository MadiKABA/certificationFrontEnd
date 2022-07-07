import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDepartementComponent } from './components/departement/edit-departement/edit-departement.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { FormulaireDepartementComponent } from './components/departement/formulaire-departement/formulaire-departement.component';
import { FormulaireProfileComponent } from './components/profile/formulaire-profile/formulaire-profile.component';
import { FormulaireUserComponent } from './components/administrateur/formulaire-user/formulaire-user.component';
import { ListeDepartementComponent } from './components/departement/liste-departement/liste-departement.component';
import { ListeUserComponent } from './components/administrateur/liste-user/liste-user.component';
import { ProfileListeComponent } from './components/profile/profile-liste/profile-liste.component';

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

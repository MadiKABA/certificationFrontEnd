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
import {EditAdminComponent} from "./components/administrateur/edit-admin/edit-admin.component";
import { ListeEtudiantComponent } from './components/etudiant/liste-etudiant/liste-etudiant.component';
import { AjouterEtudiantComponent } from './components/etudiant/ajouter-etudiant/ajouter-etudiant.component';
import { ListeDemandeComponent } from './components/demande/liste-demande/liste-demande.component';
import { UpdateDemandeComponent } from './components/demande/update-demande/update-demande.component';
import { DetailEtudiantComponent } from './components/etudiant/detail-etudiant/detail-etudiant.component';

const routes: Routes = [
  {path:"addUser",component:FormulaireUserComponent},
  {path:"listeUser",component:ListeUserComponent},
  {path:"modifier-administrateur/:id",component:EditAdminComponent},

  {path:"liste-etudiants",component:ListeEtudiantComponent},
  {path:"ajouter-etudiant",component:AjouterEtudiantComponent},
  {path:"modifier-etudiant/:id",component:AjouterEtudiantComponent},
  {path:"detail-etudiant/:id",component:DetailEtudiantComponent},

  {path:"liste-profiles",component:ProfileListeComponent},
  {path:"ajoute-profile",component:FormulaireProfileComponent},
  {path:"modifife-profile/:id",component:EditProfileComponent},


  {path:"liste-departement",component:ListeDepartementComponent},
  {path:"ajout-departement",component:FormulaireDepartementComponent},
  {path:"modifife-departement/:id",component:EditDepartementComponent},

  {path:"liste-demandes",component:ListeDemandeComponent},
  {path:"ajouter-demande",component:UpdateDemandeComponent},
  {path:"modifier-demande/:id",component:UpdateDemandeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

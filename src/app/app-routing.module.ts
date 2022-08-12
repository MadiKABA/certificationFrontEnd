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
import { DetailDemandeComponent } from './components/demande/detail-demande/detail-demande.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/authentification/login/login.component';
import { AdministrationGuard } from './services/guard/administration.guard';
import { EtudiantGuard } from './services/guard/etudiant.guard';
import { PublicPageComponent } from './public-page/public-page.component';
import { FrontOfficComponent } from './public-page/front-offic/front-offic.component';

const routes: Routes = [

  {path:"",component:HomePageComponent, canActivate:[AdministrationGuard]},
  // {path:"",component:PublicPageComponent,children:[
  //   {path:"",component:FrontOfficComponent}
  // ]},


  {path:"addUser",component:FormulaireUserComponent, canActivate:[AdministrationGuard]},
  {path:"listeUser",component:ListeUserComponent, canActivate:[AdministrationGuard]},
  {path:"modifier-administrateur/:id",component:EditAdminComponent, canActivate:[AdministrationGuard]},

  {path:"liste-etudiants",component:ListeEtudiantComponent, canActivate:[AdministrationGuard]},
  {path:"ajouter-etudiant",component:AjouterEtudiantComponent, canActivate:[AdministrationGuard]},
  {path:"modifier-etudiant/:id",component:AjouterEtudiantComponent, canActivate:[AdministrationGuard]},
  {path:"detail-etudiant/:id",component:DetailEtudiantComponent, canActivate:[AdministrationGuard]},

  {path:"liste-profiles",component:ProfileListeComponent, canActivate:[AdministrationGuard]},
  {path:"ajoute-profile",component:FormulaireProfileComponent, canActivate:[AdministrationGuard]},
  {path:"modifife-profile/:id",component:EditProfileComponent, canActivate:[AdministrationGuard]},


  {path:"liste-departement",component:ListeDepartementComponent, canActivate:[AdministrationGuard]},
  {path:"ajout-departement",component:FormulaireDepartementComponent, canActivate:[AdministrationGuard]},
  {path:"modifife-departement/:id",component:EditDepartementComponent, canActivate:[AdministrationGuard]},

  {path:"liste-demandes",component:ListeDemandeComponent, canActivate:[AdministrationGuard]},
  {path:"ajouter-demande",component:UpdateDemandeComponent,canActivate:[EtudiantGuard]},
  {path:"modifier-demande/:id",component:UpdateDemandeComponent, canActivate:[AdministrationGuard]},
  {path:"detail-demande/:id",component:DetailDemandeComponent, canActivate:[AdministrationGuard]},


  {
    path:"login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

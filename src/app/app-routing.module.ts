import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDepartementComponent } from './back-office/departement/edit-departement/edit-departement.component';
import { EditProfileComponent } from './back-office/profile/edit-profile/edit-profile.component';
import { FormulaireDepartementComponent } from './back-office/departement/formulaire-departement/formulaire-departement.component';
import { FormulaireProfileComponent } from './back-office/profile/formulaire-profile/formulaire-profile.component';
import { FormulaireUserComponent } from './back-office/administrateur/formulaire-user/formulaire-user.component';
import { ListeDepartementComponent } from './back-office/departement/liste-departement/liste-departement.component';
import { ListeUserComponent } from './back-office/administrateur/liste-user/liste-user.component';
import { ProfileListeComponent } from './back-office/profile/profile-liste/profile-liste.component';
import {EditAdminComponent} from "./back-office/administrateur/edit-admin/edit-admin.component";
import { ListeEtudiantComponent } from './back-office/etudiant/liste-etudiant/liste-etudiant.component';
import { AjouterEtudiantComponent } from './back-office/etudiant/ajouter-etudiant/ajouter-etudiant.component';
import { ListeDemandeComponent } from './back-office/demande/liste-demande/liste-demande.component';
import { UpdateDemandeComponent } from './back-office/demande/update-demande/update-demande.component';
import { DetailEtudiantComponent } from './back-office/etudiant/detail-etudiant/detail-etudiant.component';
import { DetailDemandeComponent } from './back-office/demande/detail-demande/detail-demande.component';
import { HomePageComponent } from './back-office/home-page/home-page.component';
import { LoginComponent } from './authentification/login/login.component';
import { AdministrationGuard } from './services/guard/administration.guard';
import { EtudiantGuard } from './services/guard/etudiant.guard';
import {AdministrationComponent} from "./back-office/administration.component";
import {PublicComponent} from "./front-office/public.component";
import { DemandeEtudiantComponent } from './front-office/demande-etudiant/demande-etudiant.component';
import { ContentComponent } from './front-office/content/content.component';

const routes: Routes = [
  {
    path:"",component:PublicComponent,
    children:[
      {
        path:"home",component:ContentComponent
      },
     
      {
        path: "ecrire-demnade",component:DemandeEtudiantComponent,canActivate:[EtudiantGuard]
      }
    ]
  },
  {
    path:"administration",component:AdministrationComponent,
    children:[
      {path:"accueil",component:HomePageComponent, canActivate:[AdministrationGuard]},
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
    ]
  },

  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

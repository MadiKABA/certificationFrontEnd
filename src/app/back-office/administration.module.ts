import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {SidbarComponent} from "./sidbar/sidbar.component";
import {FormulaireUserComponent} from "./administrateur/formulaire-user/formulaire-user.component";
import {FooterComponent} from "./footer/footer.component";
import {ListeUserComponent} from "./administrateur/liste-user/liste-user.component";
import {ProfileListeComponent} from "./profile/profile-liste/profile-liste.component";
import {FormulaireProfileComponent} from "./profile/formulaire-profile/formulaire-profile.component";
import {EditProfileComponent} from "./profile/edit-profile/edit-profile.component";
import {ListeDepartementComponent} from "./departement/liste-departement/liste-departement.component";
import {FormulaireDepartementComponent} from "./departement/formulaire-departement/formulaire-departement.component";
import {EditDepartementComponent} from "./departement/edit-departement/edit-departement.component";
import {EditAdminComponent} from "./administrateur/edit-admin/edit-admin.component";
import {ListeEtudiantComponent} from "./etudiant/liste-etudiant/liste-etudiant.component";
import {AjouterEtudiantComponent} from "./etudiant/ajouter-etudiant/ajouter-etudiant.component";
import {ListeDemandeComponent} from "./demande/liste-demande/liste-demande.component";
import {UpdateDemandeComponent} from "./demande/update-demande/update-demande.component";
import {DetailEtudiantComponent} from "./etudiant/detail-etudiant/detail-etudiant.component";
import {DetailDemandeComponent} from "./demande/detail-demande/detail-demande.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AdministrationComponent,
    NavbarComponent,
    SidbarComponent,
    FormulaireUserComponent,
    FooterComponent,
    ListeUserComponent,
    ProfileListeComponent,
    FormulaireProfileComponent,
    EditProfileComponent,
    ListeDepartementComponent,
    FormulaireDepartementComponent,
    EditDepartementComponent,
    EditAdminComponent,
    ListeEtudiantComponent,
    AjouterEtudiantComponent,
    ListeDemandeComponent,
    UpdateDemandeComponent,
    DetailEtudiantComponent,
    DetailDemandeComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class AdministrationModule { }

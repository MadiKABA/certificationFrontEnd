import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidbarComponent } from './components/sidbar/sidbar.component';
import { FormulaireUserComponent } from './components/formulaire-user/formulaire-user.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListeUserComponent } from './components/liste-user/liste-user.component';
import { ProfileListeComponent } from './components/profile-liste/profile-liste.component';
import { FormulaireProfileComponent } from './components/formulaire-profile/formulaire-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ListeDepartementComponent } from './components/liste-departement/liste-departement.component';
import { FormulaireDepartementComponent } from './components/formulaire-departement/formulaire-departement.component';
import { EditDepartementComponent } from './components/edit-departement/edit-departement.component';

@NgModule({
  declarations: [
    AppComponent,
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
    EditDepartementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Administrateur } from 'src/app/models/administrateur.model';
import { Departement } from 'src/app/models/departement.model';
import { EtatCompte } from 'src/app/components/enums/etatCompte.enumm';
import { Profile } from 'src/app/models/profile.model';
import { AdminService } from 'src/app/services/administrateurService/admin.service';
import { DepartementService } from 'src/app/services/departementService/departement.service';
import { ProfileService } from 'src/app/services/profileService/profile.service';

@Component({
  selector: 'app-formulaire-user',
  templateUrl: './formulaire-user.component.html',
  styleUrls: ['./formulaire-user.component.css'],
  providers: [DatePipe]
})
export class FormulaireUserComponent implements OnInit {
  errorMessage!:string
  administrateurs!:Administrateur[];
  profiles!:Profile[];
  departements!:Departement[];

  constructor(
              private serviceAdmin:AdminService,
              private departementService:DepartementService,
              private profileService:ProfileService,
              private fb:FormBuilder,
              private datePipe:DatePipe
            ) { }

  ngOnInit(): void {
    this.getAllDepartement();
    this.getAllProfile();
  }
  getAllDepartement(){
    this.departementService.getAllDepartement().subscribe({
      next:(data)=>{
        this.departements=data
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
  getAllProfile(){
    this.profileService.getAllProfiles()
    .subscribe({
      next:(data)=>{
        this.profiles=data;
      },
      error:(error)=>{
        this.errorMessage=error;
      }
    })
  }
  dateNaissance = new Date()
  newDate=this.datePipe.transform(this.dateNaissance,('dd/MM/yyyy'))
  // etatCompte!:EtatCompte
  saveAdministrateur=this.fb.group({
    nom:[''],
    prenoms:[''],
    dateNaissance:[this.newDate],
    email:[''],
    etatCompte:[EtatCompte.Man],
    telephone:[''],
    posteOccupe:[''],
    profileDTO:[''],
    departementDTO:[''],
    username:[''],
    password:[''],

  })

  save(){
    this.serviceAdmin.saveAdmin(this.saveAdministrateur.value).subscribe({
      next:(data)=>{
        console.log(this.saveAdministrateur.value);

      },
      error:(error)=>{
        this.errorMessage=error;
        console.log(error);

      }
    })
  }

}

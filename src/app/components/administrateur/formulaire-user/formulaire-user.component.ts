import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
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
  saveAdministrateur=this.fb.group({
    nom:['',[Validators.required,Validators.pattern(/[a-zA-Z]/)]],
    prenoms:['',[Validators.required,Validators.pattern(/[a-zA-Z]/)]],
    dateNaissance:['',[Validators.required]],
    email:['',[Validators.required]],
    etatCompte:[EtatCompte.acive],
    telephone:['',[Validators.required,Validators.pattern(/[0-9]/)]],
    posteOccupe:['',[Validators.required,Validators.pattern(/[a-zA-Z]/)]],
    profileDTO:['',[Validators.required]],
    departementDTO:['',[Validators.required]],
    username:['',[Validators.required]],
    password:['',[Validators.required]]

  })

  save(){
    if (this.saveAdministrateur.invalid)return
    this.serviceAdmin.saveAdmin(this.saveAdministrateur.value).subscribe({
      next:(data)=>{
        console.log(this.saveAdministrateur.value);
        alert("Administrateur ajouter avec success")
        this.saveAdministrateur.reset({})
      },
      error:(error)=>{
        this.errorMessage=error;
        console.log(error);
      }
    })
  }
  get controleSaisie(){
    return this.saveAdministrateur.controls;
  }

}

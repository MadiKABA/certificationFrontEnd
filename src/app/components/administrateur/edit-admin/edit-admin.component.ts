import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../services/administrateurService/admin.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EtatCompte} from "../../enums/etatCompte.enumm";
import {DepartementService} from "../../../services/departementService/departement.service";
import {Departement} from "../../../models/departement.model";
import {ProfileService} from "../../../services/profileService/profile.service";
import {Profile} from "../../../models/profile.model";
import {Administrateur} from "../../../models/administrateur.model";

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
  id!:any;
  message!:string
  errorMessage!:string
  departements!:Departement[]
  profiles!:Profile[]
  data!:Administrateur
  departementDTO!:any
  tes:any


  constructor(private adminService:AdminService,
              private fb:FormBuilder,
              private router:ActivatedRoute,
              private routerRedirect:Router,
              private departementService:DepartementService,
              private profileService:ProfileService) { }

  ngOnInit(): void {
    this.getAllDepartement();
    this.getAllProfile();
    this.id=this.router.snapshot.params['id'];
    console.log(this.id);
    this.adminService.getOneAdministrateur(this.id).subscribe({
      next:(data:any)=>{
        this.data=data
        this.saveAdministrateur=this.fb.group({
          nom:(data['nom']),
          prenoms:(data['prenoms']),
          dateNaissance:(data['dateNaissance']),
          email:(data['email']),
          etatCompte:[EtatCompte.acive],
          telephone:(data['email']),
          posteOccupe:(data['posteOccupe']),
          profileDTO:(data.profileDTO['libelle']),
          departementDTO:(data.departementDTO['nomDepartement']),
          username:(data['username']),
          password:(data['password'])
        })
        console.log(data);
      },
      error:(error)=>{
        console.log(error);
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
    // if (this.saveAdministrateur.invalid)return
    this.adminService.editAdmin(this.id,this.saveAdministrateur.value).subscribe({
      next:(data)=>{
        console.log(this.saveAdministrateur.value);
        alert("Administrateur Modifier avec success")
        this.saveAdministrateur.reset({})
        this.redirction();
      },
      error:(error)=>{
        this.errorMessage=error;
        console.log(error);
      }
    })
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
  get controleSaisie(){
    return this.saveAdministrateur.controls;
  }

  redirction(){
    this.routerRedirect.navigate(['/listeUser']);
  }
}

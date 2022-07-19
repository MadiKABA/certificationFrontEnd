import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Filiere } from 'src/app/models/filiere.model';
import { EtudiantService } from 'src/app/services/etudiantService/etudiant-service.service';
import { FiliereServiceService } from 'src/app/services/filiere/filiere-service.service';
import { EtatCompte } from '../../enums/etatCompte.enumm';
import { NiveauEtude } from '../../enums/niveauEtude.enumm';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent implements OnInit {
  errorMessage!:string
  filieres!:Filiere[];

  constructor(
    private fb:FormBuilder,
    private serviceFiliere:FiliereServiceService, 
    private serviceEtudiant:EtudiantService,
    private routerRedirect:Router  ) { }

  getAllFilieres(){
    this.serviceFiliere.getAllFiliere().subscribe({
      next:(data=>{
        this.filieres=data
      }),
      error:(error)=>{
        console.log(error); 
      }
    })
  }

  ngOnInit() {
    this.getAllFilieres();
  }

  saveEtudiant=this.fb.group({
    nom:this.fb.control(null,[Validators.required,Validators.minLength(2)]),
    prenoms:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
    dateNaissance:this.fb.control(null,[Validators.required]),
    email:this.fb.control(null,[Validators.required,Validators.email]),
    telephone:this.fb.control(null,[Validators.required,Validators.minLength(9),Validators.pattern("[0-9]+")]),
    matricule:this.fb.control(null,[Validators.required,Validators.minLength(5)]),
    profileDTO:this.fb.control({id:1}),
    etatCompte:this.fb.control(EtatCompte.acive),
    filiereDTO:this.fb.control(null,[Validators.required]),
    niveauEtude:this.fb.control(null,[Validators.required]),
    photo:this.fb.control(null),
    username:this.fb.control(null,[Validators.required,Validators.minLength(5)]),
    password:this.fb.control(null,[Validators.required,Validators.minLength(5)]),
  })

  save(){
    if(this.saveEtudiant.invalid)return
    let etudiant=this.saveEtudiant.value;
    this.serviceEtudiant.saveEtudiant(etudiant).subscribe({
      next:(data)=>{
        alert("Ajout effectuer avec success");
        this.redirction();
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  redirction(){
    this.routerRedirect.navigate(['/liste-etudiants']);
  }
}

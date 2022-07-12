import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filiere } from 'src/app/models/filiere.model';
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

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  saveEtudiant=this.fb.group({
    nom:this.fb.control(null,[Validators.required,Validators.minLength(2)]),
    prenoms:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
    dateNaissance:this.fb.control(null,[Validators.required]),
    email:this.fb.control(null,[Validators.required,Validators.email]),
    telephone:this.fb.control(null,[Validators.required,Validators.minLength(9),Validators.pattern("[0-9]+")]),
    matricule:this.fb.control(null),
    profileDTO:this.fb.control(null),
    etatCompte:this.fb.control(EtatCompte.acive),
    filiereDTO:this.fb.control(null),
    photo:this.fb.control(null),
    username:this.fb.control(null),
    password:this.fb.control(null),
  })

  save(){

  }

}

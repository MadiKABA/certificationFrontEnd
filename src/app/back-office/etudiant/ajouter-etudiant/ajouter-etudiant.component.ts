import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant.model';
import { Filiere } from 'src/app/models/filiere.model';
import { EtudiantService } from 'src/app/services/etudiantService/etudiant-service.service';
import { FiliereServiceService } from 'src/app/services/filiere/filiere-service.service';
import Swal from 'sweetalert2';
import { EtatCompte } from '../../enums/etatCompte.enumm';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent implements OnInit {
  errorMessage!:string
  filieres!:Filiere[];
  id:any
  data!:Etudiant
  filiere!:Filiere

  constructor(
    private fb:FormBuilder,
    private serviceFiliere:FiliereServiceService,
    private serviceEtudiant:EtudiantService,
    private routerRedirect:Router,
    private activatideRouter:ActivatedRoute
  ) { }

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
    this.updateEtudiant();
  }

  saveEtudiant=this.fb.group({
    nom:this.fb.control(null,[Validators.required,Validators.minLength(2)]),
    prenoms:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
    dateNaissance:this.fb.control(null,[Validators.required]),
    email:this.fb.control(null,[Validators.required,Validators.email]),
    telephone:this.fb.control(null,[Validators.required,Validators.minLength(9),Validators.pattern("[0-9]+")]),
    matricule:this.fb.control(null,[Validators.required,Validators.minLength(5)]),
    profileDTO:this.fb.control({id:2}),
    etatCompte:this.fb.control(EtatCompte.acive),
    filiereDTO:this.fb.control(null,[Validators.required]),
    niveauEtude:this.fb.control(null,[Validators.required]),
    // photo:this.fb.control(null),
    username:this.fb.control(null,[Validators.required,Validators.minLength(5)]),
    password:this.fb.control(null,[Validators.required,Validators.minLength(5)]),
  })

  save(){
    if(this.saveEtudiant.invalid)return
    else if(this.id==null){
      let etudiant=this.saveEtudiant.value;
      this.serviceEtudiant.saveEtudiant(etudiant).subscribe({
        next:(data)=>{
          Swal.fire('success','Etudiant ajouter','success');
          this.redirction();
        },
        error:(error)=>{
          console.log(error);
        }
      })
      console.log('ajout de l\'etudiant',this.saveEtudiant.value);

    }else{
      this.serviceEtudiant.editEtudiant(this.id,this.saveEtudiant.value).subscribe({
        next:(data)=>{
          console.log('modification de l\'etudiant',this.saveEtudiant.value);
          console.log(data);
          Swal.fire('success','Etudiant modifier','success');
          this.redirction();
        },
        error:(error)=>{
          console.log(error);
        }
      })
    }
  }

  redirction(){
    this.routerRedirect.navigate(['/administration/liste-etudiants']);
  }

  //la methode qui permet de modifier
  updateEtudiant(){
    this.id=this.activatideRouter.snapshot.params['id'];
    console.log(this.id);
    this.serviceEtudiant.getOneEtudiant(this.id).subscribe({
      next:(data:any)=>{
        // let dataUpdated=data
        this.data=data
        this.saveEtudiant=this.fb.group({
          nom:(data['nom']),
          prenoms:(data['prenoms']),
          dateNaissance:(data['dateNaissance']),
          email:(data['email']),
          telephone:(data['telephone']),
          matricule:(data['matricule']),
          profileDTO:({id:2}),
          etatCompte:(this.data.etatCompte==='ACTIVE'?EtatCompte.acive:EtatCompte.desactive),
          filiereDTO:({id:data.filiereDTO.id,'libelle':data.filiereDTO.libelle}),
          niveauEtude:(data['niveauEtude']),
          // photo:(data),
          username:(data['username']),
          password:(data['password']),
        })
      }
    })

  }
}

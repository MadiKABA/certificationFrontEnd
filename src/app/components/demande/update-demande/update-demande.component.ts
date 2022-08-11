import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Demande } from 'src/app/models/demande.model';
import { Departement } from 'src/app/models/departement.model';
import { Etudiant } from 'src/app/models/etudiant.model';
import { Filiere } from 'src/app/models/filiere.model';
import { Profile } from 'src/app/models/profile.model';
import { LoginService } from 'src/app/services/authentification/login.service';
import { DemandeServiceService } from 'src/app/services/demandeService/demande-service.service';
import { DepartementService } from 'src/app/services/departementService/departement.service';
import Swal from 'sweetalert2';
import { StatutDemande } from '../../enums/statutDemande';

@Component({
  selector: 'app-update-demande',
  templateUrl: './update-demande.component.html',
  styleUrls: ['./update-demande.component.css']
})
export class UpdateDemandeComponent implements OnInit {
  errorMessage!:string
  demande!:Demande;
  departements!:Departement[];
  etudiant!:Etudiant
  profileDTO!:Profile
  filiereDTO!:Filiere
  id!:number

  constructor(
    private departementService:DepartementService,
    private demandeService:DemandeServiceService,
    private fb:FormBuilder,
    private routerActivted:ActivatedRoute,
    private loginService:LoginService
  ) { }

  ngOnInit(): void {
    this.getAllDepartement();
    //this.updateDemande();
    this.loginService.getCurrentUser().subscribe({
      next:(data)=>{
        console.log('user connecter est:',data);  
        this.etudiant=data  
        return this.etudiant; 
      }
    })
  }
  // saveDemande!:FormGroup;
  saveDemande=this.fb.group({
    objet:['',[Validators.required,Validators.pattern(/[a-zA-Z]/)]],
    contenu:['',[Validators.required]],
    //dateDemande:(moment())
    telephone:['',[Validators.required,Validators.pattern(/[0-9]/),Validators.minLength(9)]],
    statutDemande:[StatutDemande.EnCours],
    "etudiant": {

      "profileDTO": {
      },

      "filiereDTO": {
      },

      "id": this.loginService.getUser().id
    },
    departement:['',[Validators.required]],
  })

  /*recuperation des departement*/
  getAllDepartement(){
    this.departementService.getAllDepartement().subscribe({
      next:(data)=>{
        this.departements=data
        //console.log(data);
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }




  save(){
    if(this.saveDemande.invalid)return
    if(this.id!=null){
      alert("on doit faire une modification")
    }else{
      let demande=this.saveDemande.value;
      console.log('les donnees a poster sont',demande);
      
      this.demandeService.saveDemande(demande).subscribe({
        next:(data)=>{
          this.saveDemande.reset({})
          Swal.fire('success','Demande envoyer','success');
        },
        error:(error)=>{
          Swal.fire('error','Demande non envoyer','error');
        }
      })
    }
  }


  updateDemande(){
    this.id=this.routerActivted.snapshot.params['id'];
    this.demandeService.getOnDemande(this.id).subscribe({
      next:(data:Demande)=>{
        this.demande=data;
        console.log('la demande a modifier',this.demande);
        
        this.saveDemande=this.fb.group({
          objet:(this.demande['objet']),
          contenu:(this.demande['contenu']),
          telephone:(this.demande['telephone']),
          departement:({id:this.demande.departement.id}),
        })
      }
    })
  }
}

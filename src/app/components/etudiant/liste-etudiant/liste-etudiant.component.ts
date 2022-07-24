import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Etudiant } from 'src/app/models/etudiant.model';
import { EtudiantService } from 'src/app/services/etudiantService/etudiant-service.service';

@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.css']
})
export class ListeEtudiantComponent implements OnInit {
  etudiants!:Etudiant[];
  messageError!:string;
  motCle!:string

  constructor(
              private serviceEtudiant:EtudiantService,
              private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAll();
  }


  
  /*La methode pour recuperer tous les administrateurs*/
  public getAll(){
    this.serviceEtudiant.getAllAdmin().subscribe({
      next:(data)=>{
        console.log(data);

        this.etudiants=data
      },
      error:(error)=>{
        console.log(error);
        this.messageError=error;
      }
    })
  }


  /*La methode pour supprimer un admin */
  public delete(etudiant:Etudiant){
    let confirmation=confirm("La suppression d'un administrateur est irreversible etes-vous sur ?")
    if(confirmation==false)return;
    this.serviceEtudiant.deleteEtudiant(etudiant.id)
      .subscribe({
        next:(data)=>{
          console.log(data);
          this.getAll();
        },
        error:(error)=>{
          this.messageError=error
        }
      })
  }
  activeDesactive(etudiant:Etudiant){
    if(etudiant.etatCompte==="ACTIVE"){
      this.serviceEtudiant.desctiveCompte(etudiant).subscribe({
        next:(data)=>{
          this.getAll();
        },
        error:(error)=>{
          console.log(error); 
        }
      })
    }else{
      this.serviceEtudiant.activeCompte(etudiant).subscribe({
        next:(data)=>{  
          this.getAll();
        },
        error:(error)=>{
          console.log(error); 
        }
      })
    }
  }


  /*La methode qui permet d'afficher le resultat de la recherche*/
  handleEtudiant(){
  }
  rechercheEtudiant=this.fb.group({
    motCle:this.fb.control('')
  })
}

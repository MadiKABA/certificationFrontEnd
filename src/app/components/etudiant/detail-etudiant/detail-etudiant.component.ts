import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Demande } from 'src/app/models/demande.model';
import { Etudiant } from 'src/app/models/etudiant.model';
import { EtudiantService } from 'src/app/services/etudiantService/etudiant-service.service';

@Component({
  selector: 'app-detail-etudiant',
  templateUrl: './detail-etudiant.component.html',
  styleUrls: ['./detail-etudiant.component.css']
})
export class DetailEtudiantComponent implements OnInit {
  id!:number;
  demandeEtudiant!:Demande[];
  etudiant!:Etudiant;

  constructor(
    private serviceEtudiant:EtudiantService,
    private routerActiveted:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id=this.routerActiveted.snapshot.params['id'];
    this.getDemandeEtudiant(this.id);
    this.getEtudiant(this.id);
  }
  /*la methode qui recuperer les demande envoyr par cet etudiant*/
  getDemandeEtudiant(id:number){
    this.serviceEtudiant.getDetailEtudiant(this.id).subscribe({
      next:(data)=>{
        this.demandeEtudiant=data
        console.log('Les demande ecrite par l\'etudiant',data);
      },
      error:(error)=>{
        console.log('erreur',error);
        
      }
    })
  }
  /*La methode pour recuperer un etail*/
  getEtudiant(id:number){
    this.serviceEtudiant.getOneEtudiant(this.id).subscribe({
      next:(data)=>{
        this.etudiant=data;
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }


}

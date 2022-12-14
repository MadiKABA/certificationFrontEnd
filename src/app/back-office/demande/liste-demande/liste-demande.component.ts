import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/models/demande.model';
import { DemandeServiceService } from 'src/app/services/demandeService/demande-service.service';

@Component({
  selector: 'app-liste-demande',
  templateUrl: './liste-demande.component.html',
  styleUrls: ['./liste-demande.component.css']
})
export class ListeDemandeComponent implements OnInit {
  demandes!:Demande[];
  id!:number;
  messageError!:string

  constructor(
    private serviceDemande:DemandeServiceService
  ) { }

  ngOnInit(): void {
    this.getAllDemande();
  }

  /*La methode pour recuperer toutes les demandes*/
  getAllDemande(){
    this.serviceDemande.getAllDemandes().subscribe({
      next:(data)=>{
        this.demandes=data
        console.log(this.demandes);
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }
  /*La methode qui permet de supprimer une demande*/
  delete(id:number){
    this.serviceDemande.deleteDemande(id).subscribe({
      next:(data)=>{
        this.getAllDemande();
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }
}

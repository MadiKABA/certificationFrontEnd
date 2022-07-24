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

}

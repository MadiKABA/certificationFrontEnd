import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Demande } from 'src/app/models/demande.model';
import { DemandeServiceService } from 'src/app/services/demandeService/demande-service.service';

@Component({
  selector: 'app-detail-demande',
  templateUrl: './detail-demande.component.html',
  styleUrls: ['./detail-demande.component.css']
})
export class DetailDemandeComponent implements OnInit {
  demande!:Demande;
  id!:number;
  constructor(private serviceDemande:DemandeServiceService,private routerActiveted:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.routerActiveted.snapshot.params['id'];
    this.getDetailDemande();
  }

  getDetailDemande(){
    this.serviceDemande.getOnDemande(this.id).subscribe({
      next:(data)=>{
        this.demande=data
        console.log('les donnees de la demande',data);
      },
      error:(error)=>{
        console.log('error provenand de la demande',error);
      }
    })
  }

  valider(){
    const demande=this.demande.id;
    console.log('valider la demande',this.demande.id);
    this.serviceDemande.validatedDemande(this.demande).subscribe({
      next:(data)=>{
        console.log('la demandes a ete valider est',data);
      },
      error:(error)=>{
        console.log(error);
      }
    }) 
  }
  rejeter(){
    const demande=this.demande.id;
    console.log('valider la demande',this.demande.id);
    this.serviceDemande.rejeterDemande(this.demande).subscribe({
      next:(data)=>{
        console.log('la demandes a ete rejeter est',data);
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { DemandeServiceService } from 'src/app/services/demandeService/demande-service.service';
import {Chart} from 'chart.js';
import { tick } from '@angular/core/testing';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  demandeApprouver:any
  demandeDesaprouver:any;
  demandeTotal:any
  demandeEncours:any;
  statistique:any
  constructor(
    private serviceDemande:DemandeServiceService
  ) { }

  ngOnInit() {
    this.getStatistique1();
    this.getStatistique2();
  }

  /*Pour le statistique 1*/
  getStatistique1(){
    this.serviceDemande.getAllDemandes().subscribe({
      next:(data)=>{
        this.demandeEncours=data.filter(value=>value.statutDemande==='EnCours').length;
        this.demandeDesaprouver=data.filter(value=>value.statutDemande==='Desaprouver').length;
        this.demandeApprouver=data.filter(value=>value.statutDemande==='Approuver').length;
        this.demandeTotal=data.length;
        this.statistique=new Chart('chart1',{
          type:'pie',
          data:{
            labels: ["Demande en cours", "Demande desaprouver",'Demande approuver'],
            datasets: [{
              label: 'Le nombre de demande',
              data: [this.demandeEncours,this.demandeDesaprouver,this.demandeApprouver],
              backgroundColor: ["#0077F7","#ce0033","#E9E6E6"],
            }]
          },
        })
      },
      error:(error)=>{
        console.log('error pour les valeurs des statistique',error);
      }
    })
  }
  /*Pour le statistique 2*/
  getStatistique2(){
    this.serviceDemande.getAllDemandes().subscribe({
      next:(data)=>{
        this.demandeEncours=data.filter(value=>value.statutDemande==='EnCours').length;
        this.demandeDesaprouver=data.filter(value=>value.statutDemande==='Desaprouver').length;
        this.demandeApprouver=data.filter(value=>value.statutDemande==='Approuver').length;
        this.statistique=new Chart('chart2',{
          type:'bar',
          data:{
            labels: ["Demande en cours", "Demande desaprouver",'Demande approuver'],
            datasets: [{
              label: 'Le nombre de demande',
              data: [this.demandeEncours,this.demandeDesaprouver,this.demandeApprouver],
              backgroundColor: ["#0077F7","#ce0033","#E9E6E6"],
            }]
          },
        })
      },
      error:(error)=>{
        console.log('error pour les valeurs des statistique',error);
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Administrateur } from 'src/app/models/administrateur.model';
import { AdminService } from 'src/app/services/administrateurService/admin.service';
import { EtatCompte } from '../../enums/etatCompte.enumm';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {
  administrateurs:any
  messageError!:string

  constructor(private serviceAdmin:AdminService) { }

  ngOnInit(): void {
    this.getAll();
  }

  /*La methode pour recuperer tous les administrateurs*/
  public getAll(){
    this.serviceAdmin.getAllAdmin().subscribe({
      next:(data)=>{
        console.log(data);

        this.administrateurs=data
      },
      error:(error)=>{
        console.log(error);
        this.messageError=error;
      }
    })
  }


  /*La methode pour supprimer un admin */
  public delete(id:number){
    let confirmation=confirm("La suppression d'un administrateur est irreversible etes-vous sur ?")
    if(confirmation==false)return;
    this.serviceAdmin.deleteAdminstrateur(id)
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

  activeDesactive(admin:Administrateur){
    if(admin.etatCompte==="ACTIVE"){
      this.serviceAdmin.desctiveCompte(admin).subscribe({
        next:(data)=>{
          this.getAll();
        },
        error:(error)=>{
          console.log(error); 
        }
      })
    }else{
      this.serviceAdmin.activeCompte(admin).subscribe({
        next:(data)=>{  
          this.getAll();
        },
        error:(error)=>{
          console.log(error); 
        }
      })
    }
  }

}

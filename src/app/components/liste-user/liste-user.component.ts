import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

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

}

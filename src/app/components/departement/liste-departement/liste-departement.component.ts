import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/models/departement.model';
import { DepartementService } from 'src/app/services/departementService/departement.service';

@Component({
  selector: 'app-liste-departement',
  templateUrl: './liste-departement.component.html',
  styleUrls: ['./liste-departement.component.css']
})
export class ListeDepartementComponent implements OnInit {
  departements!:Departement[];
  messageError!:string

  constructor(private serviceDepartement:DepartementService) { }

  ngOnInit(): void {
    this.getAll();
  }
  public getAll(){
    this.serviceDepartement.getAllDepartement().subscribe({
      next:(data)=>{
        this.departements=data
        console.log(data);

      },
      error:(error)=>{
        console.log(error);

      }
    })
  }


  delete(id:number){
    this.serviceDepartement.deleteDepartement(id).subscribe({
      next:(data)=>{
        // console.log(id);
        this.getAll();

      },
      error:(error)=>{
        this.messageError=error
      }
    })

  }

}

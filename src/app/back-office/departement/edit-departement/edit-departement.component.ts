import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementService } from 'src/app/services/departementService/departement.service';

@Component({
  selector: 'app-edit-departement',
  templateUrl: './edit-departement.component.html',
  styleUrls: ['./edit-departement.component.css']
})
export class EditDepartementComponent implements OnInit {

  id!:number;
  errorMessage!:string;

  constructor(
              private departementService:DepartementService,
              private fb:FormBuilder,
              private router:ActivatedRoute,
              private redirectRoute:Router
            ) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.departementService.getOneDepartement(this.id).subscribe({
      next:(data)=>{
        this.editDepartement=this.fb.group({
          nomDepartement:(data['nomDepartement'])
        })
      },
      error:(error)=>{
        this.errorMessage=error
      }
    })
  }

  editDepartement=this.fb.group({
    nomDepartement:['',Validators.required]
  })

  /*Recuperation d'un profile a modifier*/
  // public getOne(){

  // }


  save(){
    if(this.editDepartement.invalid) return
    this.departementService.updateProfile(this.id,this.editDepartement.value).subscribe({
      next:(data)=>{
        alert("Modification effectuer avec success");
        this.redirction()
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  /*Controle les champs de saisie*/
  get controleSaisie(){
    return this.editDepartement.controls;
  }

  redirction(){
    this.redirectRoute.navigate(['/administration/liste-departement']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DepartementService } from 'src/app/services/departementService/departement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulaire-departement',
  templateUrl: './formulaire-departement.component.html',
  styleUrls: ['./formulaire-departement.component.css']
})
export class FormulaireDepartementComponent implements OnInit {
  errorMessage!:string

  constructor(private departementService:DepartementService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }



  addDepartement=this.fb.group({
    nomDepartement:this.fb.control(null,[Validators.required,Validators.minLength(3)])
  })

  save(){
    if(this.addDepartement.invalid) return
    this.departementService.saveDepartement(this.addDepartement.value).subscribe(
      {
        next:(data)=>{
          this.addDepartement.reset({})
          Swal.fire('success','Deparetement ajouter','success');

        },
        error:(error)=>{
          this.errorMessage=error;

        }
      }
    )
  }
  /*Controle les champs de saisie*/
  get controleSaisie(){
    return this.addDepartement.controls;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profileService/profile.service';

@Component({
  selector: 'app-formulaire-profile',
  templateUrl: './formulaire-profile.component.html',
  styleUrls: ['./formulaire-profile.component.css']
})
export class FormulaireProfileComponent implements OnInit {
  errorMessage!:string

  constructor(private profileService:ProfileService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  addProfile=this.fb.group({
    libelle:['',[Validators.required,Validators.pattern(/[a-zA-Z]/)]]
  })

  save(){
    if(this.addProfile.invalid) return
    this.profileService.saveProfile(this.addProfile.value).subscribe(
      {
        next:(data)=>{
          this.addProfile.reset({})

        },
        error:(error)=>{
          this.errorMessage=error;

        }
      }
    )
  }
  /*Controle les champs de saisie*/
  get controleSaisie(){
    return this.addProfile.controls;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  id!:number;
  errorMessage!:string;

  constructor(
              private profileService:ProfileService, 
              private fb:FormBuilder,
              private router:ActivatedRoute,
              private redirectRoute:Router
            ) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.profileService.getOneProfile(this.id).subscribe({
      next:(data)=>{        
        this.editProfile=this.fb.group({
          libelle:(data['libelle'])
        })
      },
      error:(error)=>{
        this.errorMessage=error
      }
    })
  }
  
  editProfile=this.fb.group({
    libelle:['',Validators.required]
  })

  /*Recuperation d'un profile a modifier*/
  // public getOne(){

  // }


  save(){
    if(this.editProfile.invalid) return
    this.profileService.updateProfile(this.id,this.editProfile.value).subscribe({
      next:(data)=>{
        alert("Modification effectuer avec success");
        this.redirction();
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  /*Controle les champs de saisie*/
  get controleSaisie(){
    return this.editProfile.controls;
  }
  redirction(){
    this.redirectRoute.navigate(['/liste-profiles']);
  }

}

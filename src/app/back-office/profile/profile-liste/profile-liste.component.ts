import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/services/profileService/profile.service';

@Component({
  selector: 'app-profile-liste',
  templateUrl: './profile-liste.component.html',
  styleUrls: ['./profile-liste.component.css']
})
export class ProfileListeComponent implements OnInit {
  messageError!:string;
  profiles!:Profile[];
  constructor(private serviceProfile:ProfileService) { }

  ngOnInit(): void {
    this.getAll();
  }
  /*La methode pour recuperer tous les profiles*/
  public getAll(){
    this.serviceProfile.getAllProfiles()
    .subscribe({
      next:(data)=>{
        this.profiles=data;
      },
      error:(error)=>{
        this.messageError=error;
      }
    })
  }
  delete(id:number){
    this.serviceProfile.deleteCategorie(id).subscribe({
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

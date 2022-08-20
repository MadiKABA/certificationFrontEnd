import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/authentification/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string='';
  login!:Login

  constructor(private loginService:LoginService,private routerRedirect:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  loggedUser=this.fb.group({
    username:['',[Validators.required,Validators.minLength(3)]],
    password:['',[Validators.required,Validators.minLength(3)]]
  })

  formSubmit(){
    let userLoged=this.loggedUser.value;
    this.loginService.generateToken(userLoged).subscribe({
      next:(data:any)=>{
        console.log('le token',data);
        /*Le login*/
        this.loginService.loginUser(data.token);
        /*recupere le current user*/
        this.loginService.getCurrentUser().subscribe({
          next:(user:any)=>{
            console.log('user connected',user);
            this.loginService.setUser(user)
            if(this.loginService.getUserRole()=='Etudiant'){
              //console.log("vous etes Etudiants",user);
              /*Redirection Etudiant*/
              this.routerRedirect.navigate(['/administration/ajouter-demande']);
            }else if(this.loginService.getUserRole()=='Administrateur'){
              //console.log('vous etes Administrateur');
              /*Redirection Administrateur*/
              this.routerRedirect.navigate(['/administration/accueil']);
            }else{
              this.loginService.logout();
            }
          },
          error:(error)=>{
            console.log('error pour la recuperation du current user',error);
          }
        })
      },
      error:(error)=>{
        console.log('error du generation du token',error);
        this.message=error;
        this.loggedUser.reset({});
      }
    })
  }

  /*Requeter vers le serveur pour generer le token*/


}

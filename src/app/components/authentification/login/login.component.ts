import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/authentification/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!:Login
  loginData={
    username:'',
    password:''
  }

  constructor(private loginService:LoginService,private routerRedirect:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log("button de connexion" ,this.loginData);
    this.loginService.generateToken(this.loginData).subscribe({
      next:(data:any)=>{
        console.log('le token',data);
        /*Le login*/
        this.loginService.loginUser(data.token);
        /*recupere le current user*/
        this.loginService.getCurrentUser().subscribe({
          next:(user:any)=>{
            console.log('user connected',user);
            this.loginService.setUser(user)
            if(this.loginService.getUserRole()==='Etudiant'){
              console.log("vous etes Etudiants");
              /*Redirection Etudiant*/
              this.routerRedirect.navigate(['ajouter-demande']);
            }else if(user.profile.libelle==='Admin'){
              console.log('vous etes Administrateur');
              /*Redirection Administrateur*/
              this.routerRedirect.navigate(['listeUser']);
            }else{
              this.loginService.logout();
              // console.log('vous etes Secretaire');
            }
          },
          error:(error)=>{
            console.log('error pour la recuperation du current user',error);           
          }
        })
      },
      error:(error)=>{
        console.log('error du generation du token',error);
      }
    })
  }

  /*Requeter vers le serveur pour generer le token*/


}

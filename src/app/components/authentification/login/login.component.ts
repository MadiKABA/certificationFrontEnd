import { Component, OnInit } from '@angular/core';
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

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log("button de connexion" ,this.loginData);
    this.loginService.generateToken(this.loginData).subscribe({
      next:(data)=>{
        console.log('le token',data);
      },
      error:(error)=>{
        console.log('error du generation du token',error);
      }
    })
  }

  /*Requeter vers le serveur pour generer le token*/


}

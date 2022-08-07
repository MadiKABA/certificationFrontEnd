import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Administrateur } from 'src/app/models/administrateur.model';
import { Etudiant } from 'src/app/models/etudiant.model';
import { Login } from 'src/app/models/login.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private host=environment.generateLogin;

  constructor(private http:HttpClient) { }

  /*genration du token*/
  public generateToken(login:Login):Observable<Login>{
    return this.http.post<Login>(this.host,login)
      .pipe(
        catchError(this.handleError)
      )
  }

  /*lgin user: set token in localstorage*/
  public loginUser(token:any){
    localStorage.setItem('token',token)
    return true
  }
  /*is login: user is logged in or not*/
  public isLoggedIn(){
    let tokenStr=localStorage.getItem("token");
    if(tokenStr==undefined|| tokenStr==''||tokenStr==null){
      return false;
    }else{
      return true;
    }
  }

  /*logout remove token form localstorage*/
  public logout(){
    localStorage.removeItem("token");
    return true;
  }

  /*get token*/
  public getToken(){
    return localStorage.getItem("token");
  }

  /*get user detail*/
  public setAdminDetail(administrateur:Administrateur){
    localStorage.setItem('administrateur',JSON.stringify(administrateur));
  }

  public setEtudiantDetail(etudiant:Etudiant){
    localStorage.setItem('etudiant',JSON.stringify(etudiant));
  }
  /*getUser*/
  getUser(){
    let etudiantStr=localStorage.getItem('etudiant');
    let administrateurStr=localStorage.getItem('administrateur');
    if(etudiantStr!=null){
      return JSON.parse(etudiantStr);
    }else if(administrateurStr!=null){
      return JSON.parse(administrateurStr);
    }else{
      this.logout();
      return null;
    }
  }

  /*getUser role*/
  public getUserRole(){
    let user=this.getUser();
    return user.profile.libelle;
  }


  private handleError(error: HttpErrorResponse) {
    let messageError=''
    if (error.status === 0) {
      //errur coter client
      messageError=error.error.message;
    } else {
      //Erreur du backend
      // console.log(error.error.message)
      messageError=error.error.message
    }
    // Return return l'eurr sur l'interface utilisateur.

    return throwError(() => new Error(messageError));
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Administrateur } from '../../models/administrateur.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private host=environment.hostAdmin;

  constructor(private http:HttpClient) { }
  /*La methode pour recuperer tous les administrateur*/
  public getAllAdmin():Observable<any>{
    return this.http.get(this.host).pipe(
      catchError(this.handleError)
    );
  }
  /*La methode pour enregistrer un administrateur*/
  public saveAdmin(administrateur:Administrateur):Observable<Administrateur[]>{
    return this.http.post<Administrateur[]>(this.host,administrateur)
      .pipe(
        catchError(this.handleError)
      )
  }

  /*Supprimer une categorie*/
  public deleteAdminstrateur(id:number){
    return this.http.delete(this.host+"/"+id)
    .pipe(
      catchError(this.handleError)
    )
  }
  /*la mehode pour recuperer un administrateur*/
  public getOneAdministrateur(id:number):Observable<number>{
    return this.http.get<number>(this.host+"/"+id)
      .pipe(
        catchError(this.handleError)
      )
  }
  /*La methode pour modifier un administrateur*/
  public editAdmin(id:number,administrateur:Administrateur):Observable<any>{
    return this.http.put<any>(this.host+"/"+id,administrateur)
      .pipe(
        catchError(this.handleError)
      )
  }
  /*Active desactive compte*/
  public desctiveCompte(administrateur:Administrateur):Observable<any>{
    return this.http.put<any>(this.host+"/"+administrateur.id+"/desactive",administrateur).pipe(
      catchError(this.handleError)
    )
  }
  /*Active activer le compte compte*/
  public activeCompte(administrateur:Administrateur):Observable<any>{
    return this.http.put<any>(this.host+"/"+administrateur.id+"/active",administrateur).pipe(
      catchError(this.handleError)
    )
  }

  /*La methode pour chercher un administrateur par son nom*/
  public rechercheAdminByName(motCle:string):Observable<any>{
    return this.http.get<any>(this.host+"/recherche?recherche="+motCle)
    .pipe(
      catchError(this.handleError)
    )
  }

  //la gestion des erreur.
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

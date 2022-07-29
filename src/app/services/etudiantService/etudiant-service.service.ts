import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Demande } from 'src/app/models/demande.model';
import { Etudiant } from 'src/app/models/etudiant.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  host=environment.hostEtudiant

  constructor(private http:HttpClient) { }


  /*La methode pour recuperer tous les etudiant*/
  public getAllAdmin():Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.host).pipe(
      catchError(this.handleError)
    )
  }

  /*Supprimer une categorie*/
  public deleteEtudiant(id:number){
    return this.http.delete(this.host+"/"+id)
    .pipe(
      catchError(this.handleError)
    )
  }

  /*Active desactive compte*/
  public desctiveCompte(etudiant:Etudiant):Observable<any>{
    return this.http.put<any>(this.host+"/"+etudiant.id+"/desactive",etudiant).pipe(
      catchError(this.handleError)
    )
  }
  /*Active activer le compte compte*/
  public activeCompte(etudiant:Etudiant):Observable<any>{
    return this.http.put<any>(this.host+"/"+etudiant.id+"/active",etudiant).pipe(
      catchError(this.handleError)
    )
  }

  /*La methode pour enregistrer un etudinat*/
  public saveEtudiant(etudiant:Etudiant):Observable<Etudiant[]>{
    return this.http.post<Etudiant[]>(this.host,etudiant)
      .pipe(
        catchError(this.handleError)
      )
  }

  /*La methode pour modifier un administrateur*/
  public editEtudiant(id:number,etudiant:Etudiant):Observable<any>{
    return this.http.put<any>(this.host+"/"+id,etudiant)
      .pipe(
        catchError(this.handleError)
    )
  }

  /*la mehode pour recuperer un etudiant*/
  public getOneEtudiant(id:number):Observable<Etudiant>{
    return this.http.get<Etudiant>(this.host+"/"+id)
      .pipe(
        catchError(this.handleError)
      )
  }
  /*La methode pour recuperer le detail d'un etudiant*/
  public getDetailEtudiant(id:number):Observable<Demande[]>{
    return this.http.get<Demande[]>(this.host+"/"+id+"/demandes")
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

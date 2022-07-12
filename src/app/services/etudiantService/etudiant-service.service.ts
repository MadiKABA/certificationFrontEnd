import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
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

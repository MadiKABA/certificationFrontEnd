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
  /*La methode pour recuperer un administrateur*/
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

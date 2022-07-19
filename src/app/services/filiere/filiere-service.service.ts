import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Filiere } from 'src/app/models/filiere.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiliereServiceService {

  constructor(private http:HttpClient) { }
  host=environment.hostFiliere
  /*Recuperer tous les filieres*/
  public getAllFiliere():Observable<Filiere[]>{
    return this.http.get<Filiere[]>(this.host)
    .pipe(
      catchError(this.handleError)
    )
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

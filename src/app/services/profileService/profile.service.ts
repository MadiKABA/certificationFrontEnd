import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, pipe, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from '../../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private host=environment.hostProfile;

  constructor(private http:HttpClient) { }
  /*Recuperer tous les profiles*/
  public getAllProfiles():Observable<Profile[]>{
    return this.http.get<Profile[]>(this.host)
    .pipe(
      catchError(this.handleError)
    )
  }
  /*Savugarder une categorie*/
  public saveProfile(profile:Profile[]):Observable<Profile>{
    return this.http.post<Profile>(this.host,profile)
      .pipe(
        catchError(this.handleError)
      )
  }
  /*Supprimer une categorie*/
  public deleteCategorie(id:number){
    return this.http.delete(this.host+"/"+id)
    .pipe(
      catchError(this.handleError)
    )
  }
  /*Recuperer un profile*/
  public getOneProfile(id:number):Observable<any>{
    return this.http.get(this.host+"/"+id)
    .pipe(
      catchError(this.handleError)
    )
  }

  /*Modification de profile*/
  public updateProfile(id:number,profile:Profile[]):Observable<any>{
    return this.http.put(this.host+"/"+id,profile)
      pipe(
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

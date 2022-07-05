import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Departement } from '../models/departement.model';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  host=environment.hostDepartement;

  constructor(private http:HttpClient) { }
  //Recuperation des tous lse departements
  public getAllDepartement():Observable<Departement[]>{
    return this.http.get<Departement[]>(this.host)
      .pipe(
        catchError(this.handleError)
      )

  }

  /*Savugarder une categorie*/
  public saveDepartement(departement:Departement[]):Observable<Departement>{
    return this.http.post<Departement>(this.host,departement)
      .pipe(
        catchError(this.handleError)
      )
  }
  /*Supprimer une categorie*/
  public deleteDepartement(id:number){
    return this.http.delete(this.host+"/"+id)
    .pipe(
      catchError(this.handleError)
    )
  }
  /*Recuperer un profile*/
  public getOneDepartement(id:number):Observable<any>{
    return this.http.get(this.host+"/"+id)
    .pipe(
      catchError(this.handleError)
    )
  }

  /*Modification de profile*/
  public updateProfile(id:number,departement:Departement[]):Observable<any>{
    return this.http.put(this.host+"/"+id,departement)
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

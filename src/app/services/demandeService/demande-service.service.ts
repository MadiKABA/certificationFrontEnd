import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Demande } from 'src/app/models/demande.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandeServiceService {
  host=environment.hostDemande
  private smsURL="http://api.expressotelecom.sn/api-sms-itconceptafrica/sms/send";

  constructor(private http:HttpClient) { }

  /*La methode pour recuperer toutes les demandes*/
  public getAllDemandes():Observable<Demande[]>{
    return this.http.get<Demande[]>(this.host).pipe(
      catchError(this.handleError)
    )
  }

  /*La methode pour recuperer une demande*/
  public getOnDemande(id:number):Observable<Demande>{
    return this.http.get<Demande>(this.host+"/"+id).pipe(
      catchError(this.handleError)
    )
  }
  /*La methode pour valider une demande*/
  public validatedDemande(demande:Demande):Observable<Demande>{
    return this.http.put<Demande>(this.host+"/valider/"+demande.id,demande).pipe(
      catchError(this.handleError)
    )
  }
  /*La methode pour rejeter une demande*/
  public rejeterDemande(demande:Demande):Observable<Demande>{
    return this.http.put<Demande>(this.host+"/rejeter/"+demande.id,demande).pipe(
      catchError(this.handleError)
    )
  }

  /*La methode qui permet de supprimer une demande*/
  public deleteDemande(id:number):Observable<any>{
    return this.http.delete(this.host+"/"+id).pipe(
      catchError(this.handleError)
    )
  }

  /*La methode qui permet de envoyer une demande*/
  public saveDemande(demande:Demande):Observable<Demande>{
    return this.http.post<Demande>(this.host,demande).pipe(
      catchError(this.handleError)
    )
  }

  /*Send message service*/
  public sendSMStoEtudiant(parms:any){
    this.http.post(this.smsURL,parms).pipe(
      catchError(this.handleError)
    )
    console.log(parms);
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

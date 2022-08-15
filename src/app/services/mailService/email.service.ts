import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { EmailRequest } from 'src/app/models/email.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  host=environment.envoiEmail

  constructor(private http:HttpClient) { }


  public sendMailToStudent(requestMessage:EmailRequest):Observable<EmailRequest>{
    return this.http.post<EmailRequest>(this.host,requestMessage)
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

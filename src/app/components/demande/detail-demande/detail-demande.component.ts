import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Demande } from 'src/app/models/demande.model';
import { EmailRequest } from 'src/app/models/email.model';
import { DemandeServiceService } from 'src/app/services/demandeService/demande-service.service';
import { EmailService } from 'src/app/services/mailService/email.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-demande',
  templateUrl: './detail-demande.component.html',
  styleUrls: ['./detail-demande.component.css']
})
export class DetailDemandeComponent implements OnInit {  
  demande!:Demande;
  id!:number;
  emailParam!:EmailRequest;
  addEmail!:FormGroup
  constructor(
    private serviceDemande:DemandeServiceService,
    private routerActiveted:ActivatedRoute,
    private routerRedirect:Router,
    private sendMail:EmailService,
    private fb:FormBuilder
    ) { }

  ngOnInit(): void {
    this.id=this.routerActiveted.snapshot.params['id'];
    this.getDetailDemande();
  }

  getDetailDemande(){
    this.serviceDemande.getOnDemande(this.id).subscribe({
      next:(data)=>{
        this.demande=data
        console.log('les donnees de la demande',data);
      },
      error:(error)=>{
        console.log('error provenand de la demande',error);
      }
    })
  }


  valider(){
    const demande=this.demande.id;
    let confirmation=confirm("Une fois cette demande valider vous ne pourrez plus revenir sur cette décision ?")
    if(confirmation==false)return;
    this.serviceDemande.validatedDemande(this.demande).subscribe({

      next:(data)=>{
        this.addEmail=this.fb.group({
          to:[data.telephone],
          subject:[`Votre demande ${data.objet} a ete valider`],
          message:['Veuillez passez dans 24h pour recuperer votre demande'],
        })
        console.log('les parm de email a envoyer',this.addEmail.value);
        
        this.sendMail.sendMailToStudent(this.addEmail.value).subscribe({
          next:(res)=>{        
          },
        })

        Swal.fire('success','Demande approuver','success');
        console.log('le numero du demandeur est',data.telephone);
        this.redirction();
      },
      error:(error)=>{
        // console.log(error);
      }
    }) 
  }
  rejeter(){
    const demande=this.demande.id;
    let confirmation=confirm("Une fois cette demande rejeter vous ne pourrez plus revenir sur cette décision ?")
    if(confirmation==false)return;
    this.serviceDemande.rejeterDemande(this.demande).subscribe({
      next:(data)=>{
        this.addEmail=this.fb.group({
          to:[data.telephone],
          subject:[`Votre demande ${data.objet} a ete rejeter`],
          message:['Pour plus de information veuillez passez au departement au quel vous vous etes adressez'],
        })
        console.log('les parm de email a envoyer',this.addEmail.value);
        
        this.sendMail.sendMailToStudent(this.addEmail.value).subscribe({
          next:(res)=>{     
            console.log(res);
               
          },
        })

        Swal.fire('success','Demande rejeter','success');
        console.log('le numero du demandeur est',data.telephone);
        this.redirction();
      },
      error:(error)=>{
        // console.log(error);
      }
    })
  }

  redirction(){
    this.routerRedirect.navigate(['/liste-demandes']);
  }

}

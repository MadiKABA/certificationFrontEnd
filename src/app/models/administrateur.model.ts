import { Departement } from "./departement.model";
import { EtatCompte } from "./etat.model";
import { Profile } from "./profile.model";

export interface Administrateur{
    id:number;
    nom:string;
    prenoms:string;
    dateNaissance:Date;
    email:string;
    telephone:string;
    posteOccupe:string;
    profileDTO:Profile;
    etatCompte:EtatCompte
    departementDTO:Departement;
    username:string;
    password:string;
}
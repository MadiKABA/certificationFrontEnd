import { Departement } from "./departement.model";
import { Profile } from "./profile.model";

export interface Administrateur{
    id:number;
    nom:string;
    prenoms:string;
    dateNaissance:string;
    email:string;
    telephone:string;
    posteOccupe:string;
    profileDTO:Profile;
    departementDTO:Departement;
    username:string;
    password:string;
}
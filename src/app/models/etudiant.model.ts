import { EtatCompte } from "../components/enums/etatCompte.enumm";
import { NiveauEtude } from "../components/enums/niveauEtude.enumm";
import { Filiere } from "./filiere.model";
import { Profile } from "./profile.model";

export interface Etudiant{
    id:number;
    nom:string;
    prenoms:string;
    dateNaissance:Date;
    email:string;
    telephone:string;
    matricule:string;
    niveauEtude:string;
    profileDTO:Profile;
    etatCompte:EtatCompte
    filiereDTO:Filiere;
    photo:string
    username:string;
    password:string;
}
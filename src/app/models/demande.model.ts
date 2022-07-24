import { Departement } from "./departement.model";
import { Etudiant } from "./etudiant.model";

export interface Demande{
    id:number;
    objet:string;
    dateDemande:Date;
    statutDemande:string
    telephone:string;
    departement:Departement[];
    contenu:string;
    etudiant:Etudiant
}
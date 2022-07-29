import { Demande } from "./demande.model";

export interface Departement{
    id:number;
    nomDepartement:string;
    demande:Demande[]
}
import { Employee } from 'src/app/models/employee.model';
import { Offre } from "./offre.model";

export class Demande {
  demande_id!: number ;
  offre_id!: number ;
  employe_id!: number;
  nb_a_exp!: number ;
  type_demande!: string ;
  titre_fonction!: string ;
  nature_contrat!: string ;
  lien_fichier!: string ;
  nom_fichier!: string ;
  remarque!: string ;
  statut_chef!: string ;
  statut_rh!: string ;
  statut_ds!: string ;
  motif_chef!: string ;
  motif_rh!: string ;
  motif_ds!: string ;
  collaborateur_remp!: string ;
  affectation!: string ;
  offres! : Offre  ;
  employes! : Employee;

}

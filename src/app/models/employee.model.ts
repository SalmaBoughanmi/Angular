import { Certification } from "./certification.model";
import { Diplome } from "./diplome.model";
import { Experience } from "./experience.model";
import { Technologie } from "./technologie.mpdel";

export interface Employee {
  employe_id: number;
  nom: string;
  prenom: string;
  matricule: string;
  matricule_resp: string;
  fonction: string;
  role: string;
  date_recrutement: string;
  email: string;
  compte_winds: string;
  password: string;
  diplomes: Diplome [];
  experiences: Experience [] ;
  certifications: Certification [];
  technologies: Technologie [] ;
}

import { DemandesService } from './../../../../services/demandes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dem-trait-rh',
  templateUrl: './dem-trait-rh.component.html',
  styleUrls: ['./dem-trait-rh.component.css']
})
export class DemTraitRhComponent implements OnInit{
statut:string="Accept%C3%A9e";
demandes:any[]=[];
constructor( public demandeService:DemandesService){}
ngOnInit(): void {
  this.getDemande(this.statut)
}
getDemande(demande_id:any){
  this.demandeService.getDemandeByStatutChef(demande_id).subscribe((data:any)=>{
   this.demandes=data
   console.log(this.demandes)



  })
 }
}

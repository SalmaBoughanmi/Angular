import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { OffresService } from 'src/app/services/offres.service';
import { Demande } from 'src/app/models/demande.model';

@Component({
  selector: 'app-mes-dem-chef',
  templateUrl: './mes-dem-chef.component.html',
  styleUrls: ['./mes-dem-chef.component.css']
})
export class MesDemChefComponent implements OnInit {
  iduser: any;
  listedemande: any;
  user:any;
  OffreTab:any[]=[];
  mesDemandes:any[]=[];
  demandes: any[] = [];

  constructor(private router: Router, private emmployerser: EmployeesService,private offresService: OffresService) {}

  ngOnInit(): void {
    this.iduser = localStorage.getItem('iduser');
    console.log(this.iduser);
    this.emmployerser.getEmployee(this.iduser).subscribe(data=>{
      this.user = data;
    });
    this.offresService.getOffres().subscribe((data:any) => {
        this.OffreTab = data;
    });
    this.emmployerser.getAllmydemande(this.iduser).subscribe((data:any) => {
        this.demandes = data;
        this.getAll();
        console.log('employees chef',data);
    });
  }

  getAll() {
    for(let i =0; i < this.demandes.length ; i++)
      {
          let offer:any;
          for(let j=0 ; j <  this.OffreTab.length ; j++)
          {
              if (this.demandes[i].offre_id == this.OffreTab[j].offre_id)
              {
                  offer= this.OffreTab[j];
              }
          }
          let CustomData =
          {
            nom : this.user.nom,
            prenom : this.user.prenom,
            fonction : offer.fonction,
            statut_chef : this.demandes[i].statut_chef,
            statut_rh : this.demandes[i].statut_rh,
            statut_ds : this.demandes[i].statut_ds,
          };
          this.mesDemandes.push(CustomData);
      }
      this.listedemande = this.mesDemandes;

  }
}

import { FactureService } from './../../services/facture.service';
import { MarcheService } from './../../services/marche.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { FournisseursService } from 'src/app/services/fournisseurs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   nbFactures: any ;
   nbMarches: any ; 
   nbFournisseurs: any ;
  constructor(private fournisseursService: FournisseursService,private marcheService:MarcheService,private factureService:FactureService) {

  }

  ngOnInit(): void {
    this.nbFactures = this.getNombreFactures() ;
    this.nbMarches = this.getNombreMarches();
    this.nbFournisseurs = this.getNombreFournisseurs();
  }
 
  getNombreFactures(){
    return this.factureService.getNombreFactures().subscribe(
      res =>{
        this.nbFactures = res ;
      }
    )
  }

  getNombreFournisseurs(){
    return this.fournisseursService.getNombreFournisseurs().subscribe(
      res =>{
        this.nbFournisseurs = res ;
      }
    )
  }

  getNombreMarches(){
    return this.marcheService.getNombreMarches().subscribe(
      res =>{
        this.nbMarches = res ;
      }
    )
  }



               
}

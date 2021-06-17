import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FournisseursService } from 'src/app/services/fournisseurs.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {
  length: string;
  size:number = 50 ;
  index:number = 1 ;
  test:number = 1 ;
  public term: string;
  pageEvent: PageEvent;
  Rechercher:string ;
  checked ;

  fournisseur = {
    content: [],
    last: '', 
    totalPages: '',
    totalElements: '', 
    size: '',
    number: '', 
    sort: '', 
    first: '', 
    numberOfElements: ''
  }
  
  fournisseuredit = {
    idFournisseur: '1213',
    codeTier: '1213', 
    raisonSociale: '1213',
    identifiantFiscal: '1213', 
    ice: '1213',
    adressePostale: '1213', 
    dateCreation: '1213', 
    dateModification: '1213', 
    telephone:'1213', 
    email: '1213', 
    statusFournisseur: '0'  }

  id:any ; 

  constructor(private fournisseursService: FournisseursService) {
    this.getfournisseurlist(this.index,this.size);
   }

   getfournisseurlist(index,size){
    this.fournisseursService.getFournisseurs(index,size)
    .subscribe(res => {
      this.fournisseur = res as any ;
    })
   }


  updatefourisseur(){
     this.fournisseursService.updatefournisseur(this.fournisseuredit.idFournisseur,
     this.fournisseuredit.raisonSociale,this.fournisseuredit.email,
      this.fournisseuredit.telephone,this.fournisseuredit.adressePostale)
      .subscribe(res =>{
         if(this.fournisseuredit.statusFournisseur == '0'){
           this.fournisseursService.desactivefournisseur(this.fournisseuredit.idFournisseur)
           .subscribe(res =>{
            this.getfournisseurlist(this.index,this.size);
           })
         }else{
           this.fournisseursService.activefournisseur(this.fournisseuredit.idFournisseur)
           .subscribe(res =>{
            this.getfournisseurlist(this.index,this.size);
           })
         }
      })
  }


  changeetat(){
    if(this.fournisseuredit.statusFournisseur == "0"){
      this.fournisseuredit.statusFournisseur = "1";
    }else{
      this.fournisseuredit.statusFournisseur = "0";
    };
  }

  
  modaldata(id){
    this.checked = null ;
    this.fournisseursService.getFournisseurbyid(id)
    .subscribe(res =>{
      this.fournisseuredit = res as any ;
      if(this.fournisseuredit.statusFournisseur == '0'){
        this.checked = false  ;
      }else{
       this.checked = true ;
      }
    })
    this.id = this.fournisseuredit.codeTier ;

    

  }




   onclick(event){
    this.index = event.pageIndex ;
   this.getfournisseurlist(this.index,this.size);
  }

  ngOnInit(): void {
  }

}

import { ActivatedRoute } from '@angular/router';
import { FactureService } from './../../services/facture.service';
import { PageEvent } from '@angular/material/paginator';
import { FournisseursService } from './../../services/fournisseurs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  length: string;
  size:number = 50 ;
  index:number = 1 ;
  test:number = 1 ;
  public term: string;
  pageEvent: PageEvent;
  Rechercher:string ;
  checked = true ;
  etat: number;
  idM: any;

  facture = {
    idFacture: '',
    statutFacture: {
        idStatut: '',
        statutLibelleCourt: '',
        statutLibelleLong: ''
    },
    numeroFacture: '',
    dateFacture: '',
    codeDevise: '',
    montantRegle: '',
    montantGlobal: '',
    dateSituation: '',
    dateCreation: '',
    dateModification: '',
    statusFacture: ''
  }
  
  factureedit = {
    idFacture: '',
    statutFacture: {
        idStatut: '',
        statutLibelleCourt: '',
        statutLibelleLong: ''
    },
    numeroFacture: '',
    dateFacture: '',
    codeDevise: '',
    montantRegle: '',
    montantGlobal: '',
    dateSituation: '',
    dateCreation: '',
    dateModification: '',
    statusFacture: ''
}

  id:any ; 

  constructor(private route: ActivatedRoute,private FactureService: FactureService) {
   }

   getFactureByMarche(index,size){
    this.FactureService.getFactureByMarche(this.idM,index,size)
    .subscribe(res => {
      this.facture = res as any ;
    })
   }
H

 


  changeetat(){
    this.checked = !this.checked;
    if(this.checked == true){
      this.etat = 1;
    }else{
      this.etat = 0 ;
    }
  }

  
  modaldata(id){
  this.FactureService.getFactureByFacture(id)
    .subscribe(res =>{
      this.factureedit = res as any ;
      if(this.factureedit.statusFacture == '0'){
        this.checked = false ;
      }else{
        this.checked = true ;
      }
    })
    this.id = this.factureedit.idFacture ;

    
  }




   onclick(event){
    this.index = event.pageIndex ;
   this.getFactureByMarche(this.idM,this.size);
  }

  updatefacture(){

    this.FactureService.updateStatusFacture(this.factureedit.idFacture,this.etat);

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.idM = params.get('idM');
    })
    this.getFactureByMarche(this.idM,this.size);

  }

}

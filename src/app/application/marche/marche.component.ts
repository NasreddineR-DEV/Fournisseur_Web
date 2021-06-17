import { FournisseursService } from 'src/app/services/fournisseurs.service';
import { MarcheService } from './../../services/marche.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marche',
  templateUrl: './marche.component.html',
  styleUrls: ['./marche.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarcheComponent implements OnInit {
   
  id: any;
  ct: string;
  i: number ;
  fi = {
    idFournisseur: 74, 
    codeTier: '', 
    raisonSociale: '', 
    identifiantFiscal: '', 
    ice: '', 
    adressePostale: '', 
    telephone: '', 
    email: '', 
    dateCreation: '', 
    dateModification: '', 
    statusFournisseur: ''
  };
  years:any = {};
  public term: string;
  year: number ;
  statut: boolean ; 
  etat: number;
  marches = {    idMarche: '',
  fournisseur: [],
  codeMarche: '',
  dateSignatureMarche: '',
  dateCreation: '',
  dateModification: '',
  factures: [],
  statusMarche: ''  };

  marche = {    idMarche: '',
  fournisseur: [],
  codeMarche: '',
  dateSignatureMarche: '',
  dateCreation: '',
  dateModification: '',
  factures: [],
  statusMarche: ''
  }


  constructor(private route: ActivatedRoute,private marcheService: MarcheService,private Fournisseursservice: FournisseursService) {

   }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.id = +params.get('id');
      this.ct = params.get('ct');
    })
    this.getYearMarche(this.id);
    this.getinfofournisseur();
  }

  getYearMarche(id){
    return this.marcheService.getYearMarche(id).subscribe(res => {
      this.years = res as any ;
      this.year = res[0] 
      this.getMarcheByIdFournisseur();
      ;})

  }

  getMarcheByIdFournisseur(){
   return this.marcheService.getMarcheByIdFournisseur(this.ct,this.year).subscribe(res =>{
        this.marches = res as any ;
   })
  }

  modaldata(idm){
    this.marcheService.getMarcheByIdMarche(idm).subscribe(res =>{
    this.marche = res as any ;
    if(this.marche.statusMarche == '1'){
          this.statut = true ;
     }else{
       this.statut = false ;
     };
    })
  }

  changeetat(){
    this.statut = !this.statut;
    if(this.statut == true){
      this.etat = 1;
    }else{
      this.etat = 0 ;
    }
    }

    updatemarche(idm,statut){
      if(statut == 1){
        this.marcheService.updateStatusMarche(idm,0).subscribe(res =>{
          this.getMarcheByIdFournisseur();
          
        })    
      }else{
        this.marcheService.updateStatusMarche(idm,1).subscribe(res =>{
          this.getMarcheByIdFournisseur();
          
        })    
      }

    }

    getinfofournisseur(){
        this.Fournisseursservice.getFournisseurbyid(this.id).subscribe(res=> {

          this.fi = res as any;
          
        })
    }

   getNbFacture(idm): number{
    this.marcheService.getNombreFactures(idm).subscribe(res => {
      this.i = res as number  ;
    } )
    return this.i ;
   }

  }


  


  





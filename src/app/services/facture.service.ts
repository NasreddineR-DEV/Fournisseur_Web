import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private url = 'http://localhost:8081/';
     
  
  constructor(private http: HttpClient) { }

  getFactureByMarche(idM,page,size){
    return this.http.get(this.url+'factureByMarche?idM='+idM+'&l=100&page='+page+'&size='+size)
  }

  getFactureByFournisseur(idM,page,size){
    return this.http.get(this.url+'factureByFournisseur?ct='+idM+'&page='+page+'&size='+size)
  }

  updateStatusFacture(idf,statut){

    return this.http.put(this.url+'updateStatus?idf='+idf,{"statusFacture": statut})

  }

  getFactureByFacture(idf){
    return this.http.get(this.url+'factureByFacture?idFact='+idf)
  }

  getNombreFactures(){
    return this.http.get(this.url+'countFacture');
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarcheService {
  private url = 'http://localhost:8081/marches/';
  private urlcount ='http://localhost:8081/';
     

  constructor(private http: HttpClient) { }

  getYearMarche(idfour){
    return this.http.get(this.url+'years?idfour='+idfour);
  }


  getMarcheByIdFournisseur(ct,date){
    return this.http.get(this.url+'fournisseurs?ct='+ct+'&dateMarche='+date);
  }

  updateStatusMarche(idm,statut){
    return this.http.put(this.url+'updateStatus?idm='+idm,{"statusMarche": statut});
  }

  getMarcheByIdMarche(idm){
    return this.http.get(this.url+'marche?idM='+idm);
  }

  getNombreMarches(){
    return this.http.get(this.url+'countMarche');
  }

  getNombreFactures(idm){
   return this.http.get(this.urlcount+'countFactureByMarche?idMarche='+idm)
  }
  
}

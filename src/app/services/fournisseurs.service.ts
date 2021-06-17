import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FournisseursService {
   
   private url = 'http://localhost:8081/fournisseurs';
     


  constructor(private http: HttpClient) { }


  
  getFournisseurs(page,size){
    return this.http.get(this.url+'/all?page='+page+'&size='+size);
  }

  activefournisseur(idfournisseur){
    return this.http.put(this.url+'/updateStatus?idf='+idfournisseur, {"statusFournisseur":  "1"}); 
  }

  desactivefournisseur(idfournisseur){
    return this.http.put(this.url+'/updateStatus?idf='+idfournisseur, {"statusFournisseur":  "0"});
  }

  updatefournisseur(idfournisseur,rsociale,email,tele,adresse){
    return this.http.put(this.url+'?idf='+idfournisseur, {"raisonSociale": rsociale,"adressePostale": adresse,"telephone": tele,"email": email});
  }

  getFournisseurbyid(id){
    return this.http.get(this.url+'?idf='+id);
  }

  getNombreFournisseurs(){
    return this.http.get(this.url+'/countFournisseur');
  }

}

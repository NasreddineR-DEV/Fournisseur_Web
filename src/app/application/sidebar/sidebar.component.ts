import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 click(){
  Swal.fire({
    icon: 'error',
    title: 'Vous ne pouvez pas accéder à ce contenu',
    text: 'Vous devez choisir un fournisseur',
    footer: '<a href="application/fournisseurs">Acceder à la liste des fournisseurs </a>'
  })
 }

}

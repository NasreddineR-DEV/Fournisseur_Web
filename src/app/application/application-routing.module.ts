import { FactureComponent } from './facture/facture.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ApplicationComponent } from './application.component'
import { AuthGuardService } from '../auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { httpInterceptorProviders } from '../auth/auth-interceptor';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatCardModule} from '@angular/material/card';
import { MarcheComponent } from './marche/marche.component';

const routes: Routes = [
    { path: "application", component: ApplicationComponent ,

    children:[
        {
            path: "dashboard", component: DashboardComponent ,
            canActivate: [AuthGuardService] 

        },
       {
           path: "fournisseurs", component: FournisseursComponent,
           canActivate: [AuthGuardService] 


       },
      {
          path: "marche/:id/:ct", component: MarcheComponent,
          canActivate: [AuthGuardService] 
      },
      {
        path: "facture/:idM", component: FactureComponent,
        canActivate: [AuthGuardService] 
    }
      
  ]


},

];

@NgModule({
    imports: [RouterModule.forRoot(routes),
              HttpClientModule,
              CommonModule,
              FormsModule,
              MatTableModule,
              MatPaginatorModule, 
              MatSortModule, 
              MatFormFieldModule, 
              MatInputModule,
              SweetAlert2Module,
              MatButtonModule,
              MatIconModule,
              MatToolbarModule,
              MatGridListModule,
              MatFormFieldModule,
              MatInputModule,
              MatRadioModule,
              MatSelectModule,
              MatCheckboxModule,
              MatDatepickerModule,
              MatNativeDateModule,
              MatButtonModule,
              MatDialogModule,          
              MatSlideToggleModule,
              MatSnackBarModule,
              Ng2SearchPipeModule,
              MatCardModule

            ],
            exports: [
                RouterModule,
                MatToolbarModule,
                MatGridListModule,
                MatFormFieldModule,
                MatInputModule,
                MatRadioModule,
                MatSelectModule,
                MatCheckboxModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatButtonModule,
                MatSlideToggleModule,
                 ],
    declarations: [ApplicationComponent,
                   DashboardComponent,
                   FournisseursComponent,
                   FactureComponent,
                   MarcheComponent,
                   TopbarComponent, 
                   SidebarComponent
    ],
    providers: [httpInterceptorProviders,AuthGuardService],
})
export class ApplicationRoutingModule { }

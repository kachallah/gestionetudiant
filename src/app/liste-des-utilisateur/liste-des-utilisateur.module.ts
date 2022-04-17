import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeDesUtilisateurPageRoutingModule } from './liste-des-utilisateur-routing.module';

import { ListeDesUtilisateurPage } from './liste-des-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeDesUtilisateurPageRoutingModule
  ],
  declarations: [ListeDesUtilisateurPage]
})
export class ListeDesUtilisateurPageModule {}

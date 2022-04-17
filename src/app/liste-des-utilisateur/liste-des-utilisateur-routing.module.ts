import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeDesUtilisateurPage } from './liste-des-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: ListeDesUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeDesUtilisateurPageRoutingModule {}

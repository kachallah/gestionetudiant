import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierUserPage } from './modifier-user.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierUserPageRoutingModule {}

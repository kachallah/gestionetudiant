import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierUserPageRoutingModule } from './modifier-user-routing.module';

import { ModifierUserPage } from './modifier-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierUserPageRoutingModule
  ],
  declarations: [ModifierUserPage]
})
export class ModifierUserPageModule {}

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ModalController } from '@ionic/angular';
import { ModifierUserPage } from '../modifier-user/modifier-user.page';

@Component({
  selector: 'app-liste-des-utilisateur',
  templateUrl: './liste-des-utilisateur.page.html',
  styleUrls: ['./liste-des-utilisateur.page.scss'],
})
export class ListeDesUtilisateurPage implements OnInit {
  tabUsers = [];
  key: string;


  constructor(public afDB: AngularFireDatabase, public modalController: ModalController) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo(){
    this.afDB.list('ListEtudiant/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
      this.tabUsers = [];
      actions.forEach(action => {
        this.tabUsers.push({
          key: action.key,
          nom: action.payload.exportVal().nom,
          prenom: action.payload.exportVal().prenom,
          sexe: action.payload.exportVal().sexe,
          age: action.payload.exportVal().age,
          classe: action.payload.exportVal().classe,
        });
      });
    });
  }
  deleteUser(user: any){
    this.afDB.list('ListEtudiant/').remove(user.key)
  }
  async editModalUser(userInfo: any) {
    const modal = await this.modalController.create({
      component: ModifierUserPage,
      componentProps: { userInfo: userInfo }
    });
    return await modal.present();
  }

}

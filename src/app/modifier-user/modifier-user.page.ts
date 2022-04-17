import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-modifier-user',
  templateUrl: './modifier-user.page.html',
  styleUrls: ['./modifier-user.page.scss'],
})
export class ModifierUserPage implements OnInit {
  userInfo: any;

  constructor(navParams: NavParams,public viewCtrl: ModalController,public toastController: ToastController,
    public afDB: AngularFireDatabase) { 
    this.userInfo = navParams.get("userInfo");
  }

  ngOnInit() {
  }

  async UpdateInfoUser(userInfo: any){
    /*this.afDB.list('ListEtudiant/').push({
      nom : this.userInfo.nom,
      prenom : this.userInfo.prenom,
      classe : this.userInfo.classe,
      sexe : this.userInfo.sexe
    });*/
    this.afDB.list('ListEtudiant/').update(userInfo.key, {
      nom : this.userInfo.nom,
      prenom : this.userInfo.prenom,
      classe : this.userInfo.classe,
      sexe : this.userInfo.sexe
    });
   
    const toast = await this.toastController.create({
      message: 'Update successfully',
      color: 'success',
      duration: 2000
    });
    toast.present();

    this.viewCtrl.dismiss();
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}

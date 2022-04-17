import { Component, ViewChild } from '@angular/core';
import { IonDatetime, NavController, ToastController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { AngularFireDatabase } from '@angular/fire/compat/database';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  
  
  dateValue = '';
  dateValue2 = '';

  dataUser = {
    nom: '',
    prenom: '',
    classe: '', 
    dateValue: '',
    sexe: ''
 };

  constructor(public afDB: AngularFireDatabase, public navCtrl: NavController, public toastController: ToastController) 
  { }
  confirm() {
    this.datetime.confirm();
  }
  
  reset() {
    this.datetime.reset();
  }

  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }

  async add() {
    this.afDB.list('ListEtudiant/').push({
      nom : this.dataUser.nom,
      prenom : this.dataUser.prenom,
      classe : this.dataUser.classe,
      age : this.dataUser.dateValue,
      sexe : this.dataUser.sexe,
      dateInscription : new Date().toISOString()
    });
    this.dataUser.nom = "";
    this.dataUser.prenom = "";
    this.dataUser.classe = "";
    this.dataUser.sexe = "";
    this.dataUser.dateValue = "";

    const toast = await this.toastController.create({
      message: 'Add successfully',
      color: 'success',
      duration: 2000
    });
    toast.present();
  }

  toUsersList(){
    this.navCtrl.navigateRoot("/liste-des-utilisateur");
  }

}

import { Component, ViewChild } from '@angular/core';
import { IonDatetime, NavController } from '@ionic/angular';
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

  constructor(public afDB: AngularFireDatabase, public navCtrl: NavController) 
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

  add() {
    this.afDB.list('ListEtudiant/').push({
      nom : this.dataUser.nom,
      prenom : this.dataUser.prenom,
      classe : this.dataUser.classe,
      age : this.dataUser.dateValue,
      sexe : this.dataUser.sexe,
      dateInscription : new Date().toISOString()
    });
    //console.log(this.afDB);
    this.dataUser.nom = "";
    this.dataUser.prenom = "";
    this.dataUser.classe = "";
    this.dataUser.sexe = "";
    this.dataUser.dateValue = "";

  }

  

  toUsersList(){
    this.navCtrl.navigateRoot("/liste-des-utilisateur");
  }

}

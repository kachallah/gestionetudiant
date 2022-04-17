import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modifier-user',
  templateUrl: './modifier-user.page.html',
  styleUrls: ['./modifier-user.page.scss'],
})
export class ModifierUserPage implements OnInit {
  userInfo: any;

  constructor(navParams: NavParams,public viewCtrl: ModalController) { 
    this.userInfo = navParams.get("userInfo");
  }

  ngOnInit() {
  }

}

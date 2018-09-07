import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SigninService } from './signin.service';

import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  usuario: string;
  password: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private signinService: SigninService,
    public alertCtrl: AlertController
  ) { }

  createUser() {
    this.signinService
    .createUser(this.usuario, this.password)
    .subscribe( response => {
      const alert = this.alertCtrl.create({
        title: 'Creación de contraseña',
        subTitle: response.message,
        buttons: ['OK']
      });
      alert.present();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

}

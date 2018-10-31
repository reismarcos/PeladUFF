import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../app/auth.service';
import { AngularFireDatabase } from 'angularfire2/database'
import { PerfilService } from '../../app/perfil.service';
/**
 * Generated class for the InfoPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-perfil',
  templateUrl: 'info-perfil.html',
})
export class InfoPerfilPage {
  userId;
  perfil;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, private perfilService: PerfilService,private db: AngularFireDatabase) {
    this.authService.getCurrentUser().subscribe(authState => {
      this.userId = authState.uid;
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPerfilPage');
    this.perfil = this.perfilService.getPerfil(this.userId);
    console.log(this.perfil);
  }

  ionViewWillLoad() {
    this.perfil = this.perfilService.getPerfil(this.userId);
    console.log(this.perfil);
  }

  

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../app/auth.service';
import { AngularFireDatabase } from 'angularfire2/database'
import { PerfilService } from '../../app/perfil.service';
import { LoginPage } from '../login/login';
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
  perfis;
  constructor(public navCtrl: NavController, private perfilService: PerfilService, db:AngularFireDatabase, private authService: AuthService) {
    console.log(db);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPerfilPage');
    
  }

  ionViewWillLoad() {
    
  }
  
  ngOnInit(){
    this.authService.getCurrentUser().subscribe(authState => {
      this.userId = authState.uid;
      this.perfis = this.perfilService.fetchPerfis(this.userId);
    });
  }

  logout(){
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}

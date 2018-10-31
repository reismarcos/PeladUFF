import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../app/auth.service';
import { LoginPage } from '../login/login';
import { PerfilService } from '../../app/perfil.service';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  userId;
  perfil;
  newPerfilFlag = false;
  deletePerfilFlag = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, private perfilService: PerfilService) {
    this.authService.getCurrentUser().subscribe(authState => {
      this.userId = authState.uid;
    });
    this.perfil = this.navParams.get('perfilParam');

    if(!this.perfil){
      this.perfil = {
      nome: '',
      curso: '',
      cidade: '',
      modalidadeFav: '',
      posFav: '',
      matricula: '',
      };
      this.newPerfilFlag = true;
      }

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  logout(){
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  savePerfil(){
    if(this.newPerfilFlag){
      this.perfilService.addPerfil(this.perfil,this.userId);
    }
    else{
      this.perfilService.editPerfil(this.perfil,this.userId);
    }
    this.navCtrl.push(TabsPage);      
  }
    

}

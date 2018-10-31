import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PeladaService } from '../../app/pelada.service';

/**
 * Generated class for the CriarPeladaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-pelada',
  templateUrl: 'criar-pelada.html',
})

export class CriarPeladaPage {
  pelada;
  title;
  newPeladaFlag = false;
  deletePeladaFlag = false;
  myDate: String = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams, private peladaService: PeladaService, private alertCtrl: AlertController) {
    this.pelada = this.navParams.get('peladaParam');
    this.myDate = new Date().toISOString();
    this.title = this.navParams.get("title");


    if(!this.pelada){
      this.pelada = {
      id: '',
      data: '',
      nome: '',
      local: '',
      hora: '',
      descricao: '',
      maxJogadores: '',
      };
      this.newPeladaFlag = true;
      }
  }

  onTrash(){
    let confirm = this.alertCtrl.create({
    title: 'Excluir?',
    message: `Você tem certeza que deseja excluir essa pelada?`, // use backtick to insert string desc
    buttons: [
      {
        text: 'Cancelar' // don't do anything when cancel
      },
      {
        text: 'Confirmar',
        handler: () => {
        //this.noteService.removeNote(this.note);
        this.deletePeladaFlag = true;
        this.navCtrl.pop();
        }
        }
        ]
        });
        confirm.present();

  }
  ionViewWillLeave() {
    
    if(this.pelada.nome === "" && this.pelada.data === "" && this.pelada.local === ""){      
      // if note is blank don't do anything      
    }
    
    else if(this.deletePeladaFlag){
      this.peladaService.removePelada(this.pelada);
      console.log("delete pelada");
    }
      
  }

 
  savePelada(){
    if(this.newPeladaFlag){
      this.peladaService.addPelada(this.pelada);
    }
    else{
      this.peladaService.editPelada(this.pelada); 
    }
    this.navCtrl.pop();      
  }
}




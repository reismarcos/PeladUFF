import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PeladaService{    
  peladas;

  constructor(private db: AngularFireDatabase){      
}  

fetchPeladas(){   
  return this.db.list('/peladas/');     
}   

removePelada(pelada){
  this.db.object('/peladas/'+ pelada.$key).remove()
    .then( x=> console.log("SUCCESS"))
    .catch( error => {
      alert("Could not delete note.");
      console.log("ERROR", error)
    });
}

addPelada(pelada){    
  this.db.list('/peladas/').push({   
      nome: pelada.nome,             
      local: pelada.local,
      data: pelada.data,
      hora: pelada.hora,
      modalidade: pelada.modalidade,
      maxJogadores: pelada.maxJogadores,
      descricao: pelada.descricao,       
  });   
 
} 

editPelada(pelada){
  this.db.object('/peladas/'+pelada.$key).update({
    nome: pelada.nome,             
    local: pelada.local,
    data: pelada.data,
    hora: pelada.hora,
    modalidade: pelada.modalidade,
    maxJogadores: pelada.maxJogadores,
    descricao: pelada.descricao,      
  });                
}  
}
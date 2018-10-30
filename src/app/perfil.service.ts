import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PerfilService{    
  Perfis;

  constructor(private db: AngularFireDatabase){      
}  

fetchPerfil(){   
  return this.db.list('/perfis');     
}   

removePerfil(perfil){
  this.db.object('/perfis/'+ perfil.$key).remove()
    .then( x=> console.log("SUCCESS"))
    .catch( error => {
      alert("Could not delete note.");
      console.log("ERROR", error)
    });
}

addPerfil(perfil){    
  this.db.list('/perfis/').push({   
      nome: perfil.nome,             
      matricula: perfil.matricula,
      curso: perfil.curso,
      modalidadeFav: perfil.modalidadeFav,
      posFav: perfil.posFav,
      cidade: perfil.cidade,
  });   
 
} 

editPerfil(perfil){
  this.db.object('/perfis/'+perfil.$key).update({
    nome: perfil.nome,             
    matricula: perfil.matricula,
    curso: perfil.curso,
    modalidadeFav: perfil.modalidadeFav,
    posFav: perfil.posFav,
    cidade: perfil.cidade,
  });                
}  
}
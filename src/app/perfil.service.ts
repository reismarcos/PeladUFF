import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PerfilService{    
  perfis;
  
  constructor(private db: AngularFireDatabase){      
}  

fetchPerfis(userId){   
  return this.db.list('/perfis/'+userId);     
}   

removePerfil(perfil){
  this.db.object('/perfis/'+ perfil.$key).remove()
    .then( x=> console.log("SUCCESS"))
    .catch( error => {
      alert("Could not delete note.");
      console.log("ERROR", error)
    });
}

addPerfil(perfil, userId){    
  this.db.list('/perfis/'+userId).push({   
      nome: perfil.nome,             
      matricula: perfil.matricula,
      curso: perfil.curso,
      modalidadeFav: perfil.modalidadeFav,
      posFav: perfil.posFav,
      cidade: perfil.cidade,
  });   
 
} 

editPerfil(perfil,userId){
  this.db.object('/perfis/'+userId).update({
    nome: perfil.nome,             
    matricula: perfil.matricula,
    curso: perfil.curso,
    modalidadeFav: perfil.modalidadeFav,
    posFav: perfil.posFav,
    cidade: perfil.cidade,
  });                
}  




}
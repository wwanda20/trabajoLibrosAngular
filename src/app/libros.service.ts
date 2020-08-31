import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  url = 'https://aqueous-spire-30568.herokuapp.com/';

  constructor(private http: HttpClient) { }

  //Metodo para solicitar guardar un libro con todos los datos
  async guardarLibro(unLibro){
    try{
      let resultado: any;

      resultado = await this.http.post(this.url+"libro", unLibro).toPromise(); //Post para guardar

      console.log(resultado);

      return resultado;
    }
    catch(error){
      console.log('Hay un error: '+error);
    }
    
  }

  //Metodo para recibir todos los libros
  async listaDeLibros(){
    try{
      let resultado: any;

      resultado = await this.http.get(this.url+"libro").toPromise(); 
    
      return resultado;
    }
    catch(error){
      console.log(error);
    }
    
  }

  
}

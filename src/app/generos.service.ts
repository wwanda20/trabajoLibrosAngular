import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GenerosService {
  url = 'https://aqueous-spire-30568.herokuapp.com/';
  //establezco los generos y id dentro de un array
  generosLibros = [
    {
      id: 'GAccion',
      genero: 'Accion'
    },
    {
      id: 'GAutoayuda',
      genero: 'Autoayuda'
    },
    {
      id: 'GManual',
      genero: 'Manual'
    },
    {
      id: 'GMisterio',
      genero: 'Misterio'
    },
    {
      id: 'GNovela',
      genero: 'Novela'
    },
    {
      id: 'GReligion',
      genero: 'Religion'
    },
    {
      id: 'GTerror',
      genero: 'Terror'
    },
  ];


  constructor(private http: HttpClient) { }
  
  //metodo que devuelve el listado de los generos
  listaGeneros(){
    //try{
      //let respuesta: any;
      //respuesta = await this.http.get(this.url+"generos").toPromise();   Agregar async
      //return respuesta;
      return this.generosLibros;
    //}
    //catch(e){
      //console.log(e);
      //return [];
    //}

  }
  
}



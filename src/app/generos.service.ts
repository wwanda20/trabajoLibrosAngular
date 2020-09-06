import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GenerosService {
  
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


  constructor() { }
  
  //metodo que devuelve el listado de los generos
  listaGeneros(){
    return this.generosLibros;

  }
  
}



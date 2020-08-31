import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GenerosService {
  
  //establezco los generos y id dentro de un array
  generosLibros = [
    {
      id: 'idAccion',
      genero: 'Accion'
    },
    {
      id: 'idAutoayuda',
      genero: 'Autoayuda'
    },
    {
      id: 'idManual',
      genero: 'Manual'
    },
    {
      id: 'idMisterio',
      genero: 'Misterio'
    },
    {
      id: 'idNovela',
      genero: 'Novela'
    },
    {
      id: 'idReligion',
      genero: 'Religion'
    },
    {
      id: 'idTerror',
      genero: 'Terror'
    },
  ];


  constructor() { }
  
  //metodo que devuelve el listado de los generos
  listaGeneros(){
    return this.generosLibros;
  }
  
}



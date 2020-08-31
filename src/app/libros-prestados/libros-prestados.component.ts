import { Component, OnInit, Input } from '@angular/core';
//import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-libros-prestados',
  templateUrl: './libros-prestados.component.html',
  styleUrls: ['./libros-prestados.component.css']
})
export class LibrosPrestadosComponent implements OnInit {

  //@Input() libros:any = [];

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
  }

  /*async agregarLibro(){    //nuevo libro
    //creo la estructura de libro 
    var libro ={
      name: this.name,
      author: this.author,
      lended: this.lended,
      gender: this.gender

    }

    //Envio estructura libro al metodo creado en el service
    var respuesta: any;
    respuesta = await this.librosService.guardarLibro(libro);

    this.hayUnNuevoLibro.emit();  //aviso que guarde el libro
  }*/
}

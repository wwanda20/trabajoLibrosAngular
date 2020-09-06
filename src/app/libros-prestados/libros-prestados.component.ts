import { Component, OnInit, Input, /*Output, EventEmitter*/ } from '@angular/core';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-libros-prestados',
  templateUrl: './libros-prestados.component.html',
  styleUrls: ['./libros-prestados.component.css']
})
export class LibrosPrestadosComponent implements OnInit {

  @Input() libros:any = [];
  //@Output() libroFuePrestado = new EventEmitter();

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
  }
/*
  name: "";
  author:"";
  lended:"";
  gender:"";

  async agregarLibro(){    //nuevo libro
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

    this.libroFuePrestado.emit();  //aviso que guarde el libro
  }
  */
}

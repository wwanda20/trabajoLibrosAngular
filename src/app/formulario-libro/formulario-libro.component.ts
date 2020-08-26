import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-libro',
  templateUrl: './formulario-libro.component.html',
  styleUrls: ['./formulario-libro.component.css']
})
export class FormularioLibroComponent implements OnInit {

  @Output() hayUnNuevoLibro = new EventEmitter();


  name= '';
  author= '';
  gender= '';

  constructor() { }

  ngOnInit(): void {
  }


  nuevoLibro(){
    var libro ={
      name: this.name,
      author: this.author,
      gender: this.gender
    }

    this.hayUnNuevoLibro.emit(libro);
      
  }

}

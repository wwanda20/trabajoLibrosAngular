import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-libros-prestados',
  templateUrl: './libros-prestados.component.html',
  styleUrls: ['./libros-prestados.component.css']
})
export class LibrosPrestadosComponent implements OnInit {

  @Input() libroPrestado:any = [];
  @Output() libroFuePrestado = new EventEmitter();
  
  name = '';
  author = '';
  lended = '';
  gender = '';
  
  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
  }

  async aListado(lended){
    var libro ={
      name: this.name,
      author: this.author,
      lended: this.lended,
      gender: this.gender

    }
    
  
    if(lended == ""){
      await this.librosService.modificar(libro.lended);
    }
  
  }

}

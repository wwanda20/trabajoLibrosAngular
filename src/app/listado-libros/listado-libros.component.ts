import { Component, OnInit, Input } from '@angular/core';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css']
})
export class ListadoLibrosComponent implements OnInit {

  @Input() libros:any = [];

  constructor(private librosservice: LibrosService) { }

    name= '';
    author= '';
    lended='';
    gender= '';
  

  ngOnInit(): void {
  }


  async prestar(item){
    var libro ={
      name: this.name,
      author: this.author,
      lended: this.lended,
      gender: this.gender

    }

    if(this.lended == ""){
      alert ("Debe colocar a quién se presta");
    }
    if (this.lended != ""){
      var respuesta:any;
      respuesta = await this.librosservice.modificar(libro.lended);
      console.log(this.lended);
      console.log (libro);
    }

  }
}

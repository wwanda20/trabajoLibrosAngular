import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent implements OnInit {

  lista:any = [];
  constructor() { }

  ngOnInit(): void {
  }


  agregarLibroALista(unLibro){
    this.lista.push(unLibro);
  }

}

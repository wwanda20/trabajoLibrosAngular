import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css']
})
export class ListadoLibrosComponent implements OnInit {

  @Input() libros:any = [];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  constructor() { console.log("Se ha creado1"); }

  ngOnInit() {
      console.log("Se ha creado2");
  }

}
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ObjetoTexto} from 'app/texto';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  data: any;
  selectedCover: number;
  color: string;
  oTitulo: ObjetoTexto;
  oSubtitulo: ObjetoTexto;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.data = this.route
      .queryParams
      .subscribe(params => {
        //Devuelve 1 si no encuentra nada.
        this.selectedCover = +params['selected'] || 1;
      });
    console.log("La cover es " + this.selectedCover);
    
    this.color = "white";
    this.oTitulo = new ObjetoTexto("", 3);
    this.oSubtitulo = new ObjetoTexto("", 2);
  }

  edicionObjetoTexto(nuevoTexto: string, objeto: ObjetoTexto) {
    objeto.texto = nuevoTexto;
    let long = objeto.texto.length;
    if (long > 10) {
      objeto.new_size = (objeto.size - (objeto.size/5)) + "em";
      if (long > 15) {
        objeto.new_size = (objeto.size - (objeto.size/3)) + "em";
      }
      if (long > 20) {
        objeto.new_size = (objeto.size - (objeto.size/2)) + "em";
      }
    } else {
      objeto.new_size = objeto.size + "em";
    }
  }
}

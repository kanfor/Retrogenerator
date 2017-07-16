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
  familia: string;
  oTitulo: ObjetoTexto;
  oSubtitulo: ObjetoTexto;
  less: number;

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
    this.oSubtitulo = new ObjetoTexto("", 2.5);
    this.familia = "font1";
  }

  edicionObjetoTexto(nuevoTexto: string, objeto: ObjetoTexto) {
    objeto.texto = nuevoTexto;
    let long = objeto.texto.length;
    this.refreshFont(false);
    if (long > 10) {
      objeto.new_size = (objeto.size - (objeto.size/5)) * this.less + "em";
      if (long > 14) {
        objeto.new_size = (objeto.size - (objeto.size/3)) * this.less + "em";
      }
      if (long > 18) {
        objeto.new_size = (objeto.size - (objeto.size/2)) * this.less + "em";
      }
    } else {
      objeto.new_size = objeto.size * this.less + "em";
    }
  }
  
  refreshFont(postCheck) {
    switch (this.familia) {
      case "font1":
        this.less = 0.6;
        break;
      /*case "font2":
        this.less = 2;
        break;*/
      default:
        this.less = 1;
        break;
    }
    if (postCheck)
    {
      this.edicionObjetoTexto(this.oTitulo.texto, this.oTitulo);
      this.edicionObjetoTexto(this.oSubtitulo.texto, this.oSubtitulo);
    }
  }
}

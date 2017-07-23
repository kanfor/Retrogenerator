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
  oTitulo: ObjetoTexto[] = [];
  oSubtitulo: ObjetoTexto[] = [];
  less: number;
  res: number = 0;
  coderes:string = "em";

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
    
    //Desktop.
    this.oTitulo[0] = new ObjetoTexto("", 2.9, false);
    this.oSubtitulo[0] = new ObjetoTexto("", 2.4, false);
    //Mobile.
    this.oTitulo[1] = new ObjetoTexto("", 8, true);
    this.oSubtitulo[1] = new ObjetoTexto("", 7, true);

    this.checkDevice();

    this.color = "white";
    this.familia = "font1";
  }

  edicionObjetoTexto(nuevoTexto: string, objeto: ObjetoTexto) {
    objeto.texto = nuevoTexto;
    let long = objeto.texto.length;
    this.refreshFont(false);
    if (long > 10) {
      console.log("ADVERTENCIA");
      console.log("Anterior " + objeto.new_size);
      objeto.new_size = (objeto.size - (objeto.size/5)) * this.less + this.coderes;
      console.log("Nuevo tamaño " + objeto.new_size);
      if (long > 14) {
        objeto.new_size = (objeto.size - (objeto.size/3)) * this.less + this.coderes;
      }
      if (long > 18) {
        objeto.new_size = (objeto.size - (objeto.size/2)) * this.less + this.coderes;
      }
    } else {
      objeto.new_size = objeto.size * this.less + this.coderes;
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
      this.edicionObjetoTexto(this.oTitulo[this.res].texto, this.oTitulo[this.res]);
      this.edicionObjetoTexto(this.oSubtitulo[this.res].texto, this.oSubtitulo[this.res]);
    }
  }
  
  checkDevice() {
    //Chequear resolucion.
    console.log("La resolucion es " + screen.width);
    if (screen.width < 1000) {
      this.res = 1;
      this.coderes = "vw";
      console.log("Es un movil");
    }
  }
}

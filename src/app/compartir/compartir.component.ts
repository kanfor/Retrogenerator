import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ObjetoTexto} from 'app/texto';

@Component({
  selector: 'app-compartir',
  templateUrl: './compartir.component.html',
  styleUrls: ['./compartir.component.css']
})
export class CompartirComponent implements OnInit {
  
  data: any;
  selectedCover: number;
  color: string;
  objetoTitulo: ObjetoTexto;
  objetoSubtitulo: ObjetoTexto;
  urlCompartir: string;
  sizeFontLink: string = "0.8em";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.urlCompartir = document.URL;
    if (this.urlCompartir.length > 150) {
      this.sizeFontLink = "0.7em";
    }
    //191
    //document.location.href = "#header";
    
    this.objetoTitulo = new ObjetoTexto('',0);
    this.objetoSubtitulo = new ObjetoTexto('',0);
    
    this.data = this.route
      .queryParams
      .subscribe(params => {
        //Devuelve 1 si no encuentra nada.
        //El + convierte a number. Si es string, no lo uses.
        this.selectedCover = +params['selected'] || 1;
        this.objetoTitulo.texto = params['titulo'];
        this.objetoTitulo.size = params['tituloSize'];
        this.objetoSubtitulo.texto = params['subtitulo'];
        this.objetoSubtitulo.size = params['subtituloSize'];
        this.color = params['color'];
      });
  }

}

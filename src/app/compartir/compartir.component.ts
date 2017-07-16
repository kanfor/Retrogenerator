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
  familia: string;
  objetoTitulo: ObjetoTexto;
  objetoSubtitulo: ObjetoTexto;
  urlCompartir: string;
  sizeFontLink: string = "0.8em";
  boolCopy: boolean = false;

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
        this.familia = params['familia'];
        this.color = params['color'];
        console.log("La familia es " + this.familia);
      });
  }
  
  copyClipboard() {
    this.boolCopy = true;
    let Url: any = document.getElementById("url");
    Url.innerHTML = this.urlCompartir;
    Url.select();
    document.execCommand("copy");
  }
  
  shareFacebook() {
    let url = 'https://www.facebook.com/sharer/sharer.php?u=' + this.urlCompartir;
    let height = 250;
    let width = 550;
    let top = 0;
    let left = 0;
    window.open(url, '', 'left=200,top='+top+',width='+width+',height='+height+',personalbar=0,toolbar=0,scrollbars=0,resizable=0');
  }

}

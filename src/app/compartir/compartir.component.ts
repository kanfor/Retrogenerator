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
  objetoTitulo: ObjetoTexto[] = [];
  objetoSubtitulo: ObjetoTexto[] = [];
  urlCompartir: string;
  sizeFontLink: string = "0.8em";
  boolCopy: boolean = false;
  res: number = 0;
  coderes:string = "em";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.urlCompartir = document.URL;
    if (this.urlCompartir.length > 150) {
      this.sizeFontLink = "0.7em";
    }

    this.objetoTitulo[0] = new ObjetoTexto('',0, true);
    this.objetoSubtitulo[0] = new ObjetoTexto('',0, true);
    this.objetoTitulo[1] = new ObjetoTexto('',0, true);
    this.objetoSubtitulo[1] = new ObjetoTexto('',0, true);
    
    this.data = this.route
      .queryParams
      .subscribe(params => {
        //Devuelve 1 si no encuentra nada.
        //El + convierte a number. Si es string, no lo uses.
        this.selectedCover = +params['selected'] || 1;
        
        this.objetoTitulo[0].texto = params['titulo'];
        this.objetoTitulo[0].size = params['tituloSize'];
        this.objetoSubtitulo[0].texto = params['subtitulo'];
        this.objetoSubtitulo[0].size = params['subtituloSize'];
        
        this.objetoTitulo[1].texto = params['titulo'];
        this.objetoTitulo[1].size = params['tituloSizeMobile'];
        this.objetoSubtitulo[1].texto = params['subtitulo'];
        this.objetoSubtitulo[1].size = params['subtituloSizeMobile'];
        
        this.familia = params['familia'];
        this.color = params['color'];
        console.log("La familia es " + this.familia);
      });

      this.checkDevice();
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
  
  checkDevice() {
    //Chequear resolucion.
    if (screen.width < 1000) {
      this.res = 1;
      this.coderes = "vw";
    }
  }

}

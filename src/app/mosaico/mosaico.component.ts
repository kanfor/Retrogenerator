import {Component, OnInit} from '@angular/core';

import {numPag, sumarPagina} from 'app/titulo/titulo.component';

@Component({
    selector: 'app-mosaico',
    templateUrl: './mosaico.component.html',
    styleUrls: ['./mosaico.component.css']
})
export class MosaicoComponent implements OnInit {

    activo: boolean;
    numPag: number;

    constructor() {}

    ngOnInit()
    {
        this.activo = true;
        this.sumarPagina();
    }
    
    sumarPagina() {
        sumarPagina(1);
        this.numPag = numPag;
    }

}

import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-titulo',
    templateUrl: './titulo.component.html',
    styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
    
    constructor() {}

    ngOnInit() {
        numPag = 3;
    }

}

export var numPag: number;

export function sumarPagina(myNumPag) {
    switch (myNumPag) {
        case 1:
            console.log("Debería sumar página");
            break;
        case 2:
        
            break;

        default:

            break;
    }
}
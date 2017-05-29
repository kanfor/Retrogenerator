import {Component, OnInit} from '@angular/core';

import {numPag} from 'app/titulo/titulo.component';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

    activo: boolean;
    numPag: number;

    constructor() {}

    ngOnInit()
    {
        this.activo = false;
        this.numPag = numPag;
    }

}

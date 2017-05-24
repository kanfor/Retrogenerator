import {Component, OnInit} from '@angular/core';

//Para llamar a un PHP necesitamos importar el siguiente servicio.
import {Http, Response, Headers} from '@angular/http';

@Component({
    selector: 'app-supercomponente',
    templateUrl: './supercomponente.component.html',
    styleUrls: ['./supercomponente.component.css']
})
export class SupercomponenteComponent implements OnInit {

    name: string;
    
    constructor(private http: Http) {
        this.name = 'Pepito';
    }

    ngOnInit() {
        console.log("El supercomponente ha sido creado satisfactoriamente");
    }
    
    sayMyName() {
        this.name = 'Mr. Pepón';
        console.log("Mi nombre es " + this.getMyName());
        //Acceso a Base de Datos.
        //return this->http.get("localhost/record.php");
    }
    
    getMyName(): string {
        return this.name;
    }
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

//El componente que viene por defecto en CLI.
import { TituloComponent } from './titulo/titulo.component';
import { MosaicoComponent } from './mosaico/mosaico.component';
import { EditorComponent } from './editor/editor.component';
import { CompartirComponent } from './compartir/compartir.component';

@NgModule({
    declarations: [
        TituloComponent,
        MosaicoComponent,
        EditorComponent,
        CompartirComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [
        TituloComponent,
        MosaicoComponent,
        EditorComponent,
        CompartirComponent,
    ]
})
export class AppModule {}

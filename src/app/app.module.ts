import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

//El componente que viene por defecto en CLI.
import {AppComponent} from './app.component';

//Mi nuevo componente. Falta revisar la nomenglatura.
import { SupercomponenteComponent } from './supercomponente/supercomponente.component';

@NgModule({
    declarations: [
        AppComponent,
        SupercomponenteComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [
        AppComponent,
        SupercomponenteComponent
    ]
})
export class AppModule {}

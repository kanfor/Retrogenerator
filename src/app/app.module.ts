import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from 'app/app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {EditorComponent} from './editor/editor.component';
import {CompartirComponent} from './compartir/compartir.component';

import {AppRoutingModule} from 'app/app-routing/app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        EditorComponent,
        CompartirComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from 'app/app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {EditorComponent} from './editor/editor.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        EditorComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
        ])
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}

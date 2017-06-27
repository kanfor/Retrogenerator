import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from 'app/home/home.component';
import {EditorComponent} from 'app/editor/editor.component';
import {CompartirComponent} from 'app/compartir/compartir.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'editor', component: EditorComponent},
    {path: 'compartir', component: CompartirComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

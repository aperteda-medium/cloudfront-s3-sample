import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {MainComponent} from "./main/main.component";

export const routes: Routes = [
    { path: '', component: MainComponent },
    {  path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

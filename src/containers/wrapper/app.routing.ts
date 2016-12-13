import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './home/home.module#HomeModule'}
];

export const routing = RouterModule.forRoot(routes);

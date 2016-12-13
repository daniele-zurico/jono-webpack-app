import {HomeComponent} from './home.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '**', component: HomeComponent}
        ])],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule {
}

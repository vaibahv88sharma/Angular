import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { DisclaimerComponent } from './disclaimer.component';

const routes: Routes = [
    {
        path: '',
        component: DisclaimerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DisclaimerRoutingModule {

}
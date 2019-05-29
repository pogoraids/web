import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PgrHomeComponent } from './users/pgr-home/pgr-home.component';
import { PgrLoginComponent } from './users/pgr-login/pgr-login.component';

const appRoutes: Routes = [
    { path: '', component: PgrHomeComponent, pathMatch: 'full' },
    { path: 'me', loadChildren: './users/users.module#UsersModule'},
    { path: 'login', component: PgrLoginComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: false }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
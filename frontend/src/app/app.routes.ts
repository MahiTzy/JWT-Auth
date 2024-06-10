import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo : 'home',
        pathMatch : 'full'
    },
    {
        path : 'home',
        component : HomeComponent,
        title : 'Home'
    },
    {
        path : 'login',
        component : LoginComponent,
        title : 'Login'
    },
    {
        path : 'dashboard',
        component : DashboardComponent,
        title : 'Dashboard',
        canActivate : [authGuard]
    },
    {
        path : '**',
        redirectTo : 'home'
    }
];

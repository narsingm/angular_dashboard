import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      // Other dummy routes can be added here, they can just point to home for now or be left empty
      { path: 'users', component: UsersComponent },
      { path: 'reports', component: HomeComponent },
      { path: 'settings', component: HomeComponent },
      { path: 'profile', component: HomeComponent }
    ]
  },
  { path: '**', redirectTo: '/login' }
];

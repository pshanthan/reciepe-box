import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'list',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./list/list.component').then((m) => m.ListComponent),
    component: ListComponent,
  },
];

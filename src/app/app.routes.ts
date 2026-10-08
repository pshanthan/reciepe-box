import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'list',
    canActivate: [authGuard],
    component: ListComponent,
  },
];

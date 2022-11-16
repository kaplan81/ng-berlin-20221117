import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'mfe1',
    loadComponent: () => import('mfe1/AppComponent').then((m) => m.AppComponent),
  },
];

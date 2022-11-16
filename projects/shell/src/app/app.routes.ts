import { Routes } from '@angular/router';
import { EmptyModuleComponent } from './empty-module/empty-module.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EmptyModuleComponent,
  },
  {
    path: 'mfe1',
    loadComponent: () => import('mfe1/AppComponent').then((m) => m.AppComponent),
  },
];

// import {
//   WebComponentWrapper,
//   WebComponentWrapperOptions,
// } from '@angular-architects/module-federation-tools';
import { Routes } from '@angular/router';
import { EmptyModuleComponent } from './empty-module/empty-module.component';
import { WebComponentWrapperComponent } from './web-component-wrapper/web-component-wrapper.component';

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
  // {
  //   path: 'mfe2',
  //   loadComponent: () => import('mfe2/App').then((m) => m.App),
  // },
  {
    path: 'mfe2',
    component: WebComponentWrapperComponent,
  },
];

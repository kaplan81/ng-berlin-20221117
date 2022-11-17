import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
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
  // {
  //   path: 'mfe2',
  //   loadComponent: () => import('mfe2/App').then((m) => m.App),
  // },
  {
    path: 'mfe2',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'mfe2',
      exposedModule: './App',

      elementName: 'mfe2-element',
    } as WebComponentWrapperOptions,
  },
];

import { Routes } from '@angular/router';

const contactRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/list.component').then((c) => c.ListComponent),
  },
];

export default contactRoutes;

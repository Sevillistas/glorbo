import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./sections/office/registry/components/office-registry/office-registry.component'),
    },
];

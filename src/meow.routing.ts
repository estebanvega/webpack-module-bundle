import { Routes, RouterModule } from '@angular/router';
import { MeowComponent } from './meow.component';

export const meowRoutes: Routes = [
  {
    path: 'meow',
    component: MeowComponent
  },
];

export const meowRouting = RouterModule.forChild(meowRoutes);

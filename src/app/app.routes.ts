import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { AveComponent } from './components/ave/ave.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ave', component: AveComponent },
  { path: 'ave/:id', component: AveComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

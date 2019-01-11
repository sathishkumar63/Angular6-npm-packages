import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:  '', component: HomeComponent, pathMatch:  'full' },
  { path:  'home', component:  HomeComponent },
 { path: 'sub/:id', component: SubpageComponent },
{ path: '**', component: HomeComponent }
];

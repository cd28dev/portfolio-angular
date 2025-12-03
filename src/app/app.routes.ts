import { Routes } from '@angular/router';
import { HomeComponent} from './features/home/home.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { FormacionComponent } from './features/formacion/formacion.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formacion', component: FormacionComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CheetsheetsComponent } from './cheetsheets/cheetsheets.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ContentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cheetsheets', component: CheetsheetsComponent }
];


export const routing = RouterModule.forRoot(routes);
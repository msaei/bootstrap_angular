import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CheetsheetsComponent } from './cheetsheets/cheetsheets.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminComponent } from './admin/admin.component';
import { ActivateGuard } from './activate-guard';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ContentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cheetsheets', component: CheetsheetsComponent },
  { path: 'admin', component: AdminComponent, canActivate: [ActivateGuard] },
  { path: '**', component: PagenotfoundComponent }
];


export const routing = RouterModule.forRoot(routes);
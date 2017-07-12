import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CheetsheetsComponent } from './cheetsheets/cheetsheets.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminComponent } from './admin/admin.component';
import { ActivateGuard } from './activate-guard';
import { LoginComponent } from './login/login.component';
import { DeactivateGuard } from './deactivate-guard';
import { PostComponent } from './post/post.component';
import { MissionComponent } from './mission/mission.component';
import { VisionComponent } from './vision/vision.component';
import { StaffComponent } from './staff/staff.component';
import { SearchComponent } from './search/search.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ContentComponent },
  { path: 'search', component: SearchComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'about', component: AboutComponent,
  children: [
      {path: '', redirectTo: 'mission', pathMatch: 'full'},
      { path: 'mission', component: MissionComponent},
      { path: 'vision', component: VisionComponent },
      { path: 'staff', component: StaffComponent }
  ]},
  { path: 'contact', component: ContactComponent, canDeactivate: [DeactivateGuard] },
  { path: 'cheetsheets', component: CheetsheetsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [ActivateGuard] },
  { path: '**', component: PagenotfoundComponent }
];


export const routing = RouterModule.forRoot(routes);
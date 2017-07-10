import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ContentLeftComponent } from './content-left/content-left.component';
import { ContentCenterComponent } from './content-center/content-center.component';
import { ContentRightComponent } from './content-right/content-right.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CheetsheetsComponent } from './cheetsheets/cheetsheets.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    ContentLeftComponent,
    ContentCenterComponent,
    ContentRightComponent,
    FooterComponent,
    ContentComponent,
    ContactComponent,
    AboutComponent,
    CheetsheetsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

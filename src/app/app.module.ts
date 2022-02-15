import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { UxProjectsComponent } from './ux-projects/ux-projects.component';
import { MePageComponent } from './me-page/me-page.component';
import { CodingProjectsComponent } from './coding-projects/coding-projects.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ArtComponent } from './art/art.component';
import { OButtonComponent } from './o-button/o-button.component';
import { OButtonOutsideComponent } from './o-button-outside/o-button-outside.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroPageComponent,
    NavigationBarComponent,
    ProjectCardComponent,
    UxProjectsComponent,
    MePageComponent,
    CodingProjectsComponent,
    OtherProjectsComponent,
    ResumeComponent,
    ArtComponent,
    OButtonComponent,
    OButtonOutsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

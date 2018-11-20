import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';

//SERVICES
import { LoginService } from './services/login.service';
import { SectionComponent } from './components/main/section/section.component';
import { AsideComponent } from './components/main/aside/aside.component';

const appRoutes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'main',      component: MainComponent },
  { path: 'login',      component: LoginComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    SectionComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

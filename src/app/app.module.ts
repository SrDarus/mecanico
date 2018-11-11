import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'main',      component: MainComponent },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

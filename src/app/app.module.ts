import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './main/blog/blog.component';
import { LoginComponent } from './main/login/login.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: 'blog',
    component: BlogComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    FooterComponent,
    BlogComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],

  bootstrap: [ AppComponent ]
})
export class AppModule { }

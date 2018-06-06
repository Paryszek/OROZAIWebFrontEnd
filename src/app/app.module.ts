import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './main/blog/blog.component';
import { LoginComponent } from './main/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './main/register/register.component';


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
    path: 'register',
    component: RegisterComponent
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
    RegisterComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }

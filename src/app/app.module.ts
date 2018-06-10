import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './main/login/login.component';
import { LogoutComponent } from './main/logout/logout.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './main/register/register.component';

import { LoginService } from './services/login.service';
import { HomeComponent } from './main/home/home.component';



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
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    UserModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ LoginService ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }

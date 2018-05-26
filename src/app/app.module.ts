import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './main/blog/blog.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  { 
    path: 'blog-component',
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
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],

  bootstrap: [
    AppComponent,
    NavigationComponent,
    FooterComponent
  ]
})
export class AppModule { }

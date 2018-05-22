import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './main/blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    FooterComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],

  bootstrap: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    FooterComponent
  ]
})
export class AppModule { }

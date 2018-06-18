import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from '../main/blog/blog.component';
import { PostComponent } from '../main/post/post.component';
import { NgModule } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HomeComponent } from '../main/home/home.component';
import { AdminComponent } from '../main/admin/admin.component';

const userRoutes: Routes = [
    {
      path: 'user',
      component: HomeComponent,
      canActivate: [ LoginService ],
      children: [
        {
          path: '',
          canActivateChild: [ LoginService ],
          children: [
            { path: 'blog', component: BlogComponent },
            { path: 'post', component: PostComponent },
            { path: 'admin', component: AdminComponent },
            { path: '', component: HomeComponent },

          ]
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(userRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class UserRoutingModule {}
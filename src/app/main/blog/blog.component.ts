import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { LoginService } from '../../services/login.service';
import { BlogService } from '../../services/blog.service';
import _ = require('lodash');
import { LoginModel } from '../../models/login.model';
@Component({
  selector: 'app-blog',
  providers: [ BlogService ],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  data: any;
  posts: Post[];
  filter: string;
  pages: string[] = ['all', '15', '10', '5', '1'];
  loginModel: LoginModel;
  count: number = 0;

  constructor(private loginService: LoginService,
              private blogService: BlogService) {}

  ngOnInit() {
    this.posts = this.blogService.getPostViewModel();
    this.loginModel = this.loginService.getLoginViewModel();
    this.loginService.initRoles();
  }

  public removePost(id: number) {
    this.blogService.removePost(id, this.count);
  }

  public filterFunction() {
    if (this.filter) {
      return _.filter(this.posts, (post: Post) => {
        if (post.title) {
          return post.title.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0;
        }
      });
    } else {
      return this.posts;
    }
  }
  public onPagesChange(value: string) {
    switch (value) {
      case 'all':
        this.count = 0;
      break;
      case '15':
        this.count = 15;
      break;
      case '10':
        this.count = 10;
      break;
      case '5':
        this.count = 5;
      break;
      case '1':
        this.count = 1;
      break;
      default:
        this.count = 0;
      break;
    }
    this.blogService.initPosts(this.count);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Post } from '../../models/post.model';
import _ = require('lodash');
import { LoginService } from '../../services/login.service'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  data: any;
  role: string;
  posts: Post[];
  filter: string;
  constructor(private http: HttpClient, private loginService: LoginService, private toastr: ToastrService) {}

  ngOnInit() {
    this.initPosts();
    this.getRoles(this.loginService.getDataModel().userName)
    .map((res: Response) => res).subscribe(val => {
      if (val && val.body.roles.length > 0) {
        this.role = val.body.roles[val.body.roles.length - 1].name;
      }
    })
  }


  public removePost(id: number) {
    return this.http.post('http://localhost:8080/removepost', id).subscribe(
      res => {
        if (res) {
          this.toastr.success('Post removed');
          this.initPosts();
        }
      },
      err => {
        console.log(err);
        this.toastr.error('Server is not responding', 'Post not removed');
      }
    );
  }

  public filterFunction() {
    if(this.filter) {
      return _.filter(this.posts, (post: Post) => {
        if(post.title) {
          return post.title.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0;  
        }
      });
    } else {
      return this.posts;
    }
    
  }

  private initPosts() {
    this.data = this.getPosts();
    this.data.map((res: Response) => res).subscribe(val => {
      this.posts = val
    });
  }
  private getPosts(): any{
    return this.http.get<any>('http://localhost:8080/posts');
  }

  private getRoles(owner: string): any{
    return this.http.get<any>('http://localhost:8080/role', 
      {
        params: {
          login: owner,
        },
        observe: 'response'
      }
    );
  }
}

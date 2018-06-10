import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Post } from '../../models/post.model';
import _ = require('lodash');

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  data: any;
  posts: Post[];
  filter: string;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.data = this.getPosts();
    this.data.map((res: Response) => res).subscribe(val => {
      this.posts = val
    });
  }
  filterFunction() {
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
  getPosts(): any{
    return this.http.get<any>('http://localhost:8080/posts');
  }
}

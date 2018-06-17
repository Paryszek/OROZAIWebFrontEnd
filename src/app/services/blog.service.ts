import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post.model';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/map';
import _ = require('lodash');

@Injectable()
export class BlogService {
  postsViewModel: Post[] = [];
  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.initPosts(0);
   }
  public removePost(id: number, count: number) {
    return this.http.post('http://localhost:8080/removepost', id).subscribe(
      res => {
        if (res) {
          this.toastr.success('Post removed');
          this.initPosts(count);
        }
      },
      err => {
        console.log(err);
        this.toastr.error('Server is not responding', 'Post not removed');
      }
    );
  }
  
  public getPostViewModel(): Post[] {
    return this.postsViewModel;
  }

  public initPosts(count: number): any {
    this.postsViewModel.length = 0;
    return this.http.get<any>('http://localhost:8080/posts?count=' + count).map((res: Response) => res).subscribe(val => {
      this.mapResponseToPostsViewModel(val);
    });
  }

  private mapResponseToPostsViewModel(responseValue: any): void {
    _.forEach(responseValue, (v) => this.postsViewModel.push(new Post(v.id, v.title, v.body, v.owner, v.dateCreated, v.image)));
  }
}

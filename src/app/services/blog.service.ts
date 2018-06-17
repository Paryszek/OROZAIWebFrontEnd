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
    this.initPosts();
   }
  public removePost(id: number) {
    return this.http.post('http://localhost:8080/removepost', id).subscribe(
      res => {
        if (res) {
          this.toastr.success('Post removed');
          this.postsViewModel.length = 0;
          this.initPosts();
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

  private initPosts(): any {
    return this.http.get<any>('http://localhost:8080/posts').map((res: Response) => res).subscribe(val => {
      this.mapResponseToPostsViewModel(val);
    });
  }

  private mapResponseToPostsViewModel(responseValue: any): void {
    _.forEach(responseValue, (v) => this.postsViewModel.push(new Post(v.id, v.title, v.body, v.owner, v.dateCreated, v.image)));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class PostService {
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {}

  public pushPost(post: Post) {
    return this.http.post('http://localhost:8080/post', post).subscribe(
      res => {
        if (res) {
          this.router.navigate(['/user/blog']);
          this.toastr.success("Post published");
        }
      },
      err => {
        console.log(err);
        this.toastr.error('Server is not responding', 'Post not published');
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service'


@Component({
  selector: 'app-post',
  providers: [ PostService ],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title: string;
  body: string;
  image: string;
  
  constructor(private postService: PostService, private toastr: ToastrService, private loginService: LoginService) {}
  
  ngOnInit() {}

  public pushPost() {
    if (this.title && this.body && this.image && this.title.length && this.body.length != 0 && this.image.length != 0) {
      if (this.isImageValid(this.image)) {
        let post = new Post(undefined, this.title, this.body, this.loginService.getLoginViewModel().userName, new Date().toString(), this.image);
        this.postService.pushPost(post);
      } else {
        this.toastr.error("Error, please insert valid image url");
      }
    } else {
      this.toastr.error("Error, please fill all the fields");
    }
  }

  private isImageValid(image: string) {
    return image.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

}

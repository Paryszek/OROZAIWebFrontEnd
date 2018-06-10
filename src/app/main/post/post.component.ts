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
  owner: string;
  dateCreated: string;
  
  constructor(private postService: PostService, private toastr: ToastrService, private loginService: LoginService) {}
  
  ngOnInit() {}

  public pushPost() {
    if (this.title && this.body && this.title.length != 0 && this.body.length != 0) {
      let post = new Post(this.title, this.body, this.loginService.getDataModel().userName, new Date().toString());
      this.postService.pushPost(post);
    } else {
      this.toastr.error("Error, please fill all the fields");
    }
  }

}

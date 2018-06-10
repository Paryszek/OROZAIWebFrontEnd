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
  image: any;
  maxFileSize: number = 5000000;
  
  constructor(private postService: PostService, private toastr: ToastrService, private loginService: LoginService) {}
  
  ngOnInit() {}

  public onImageUpload(event: any) {
    if (event.target.files[0].size < this.maxFileSize) {
      this.image = event.target.files[0];
    } else {
      this.toastr.error("Error, file is to big sizes only less than 5mb");
    }
  }
  public pushPost() {
    if (this.title && this.body && this.title.length && this.body.length != 0) {
      if (this.image && this.image.type === 'image/jpeg') {
        let post = new Post(this.title, this.body, this.loginService.getDataModel().userName, new Date().toString(), this.image);
        this.postService.pushPost(post);
      } else {
        this.toastr.error("Error, upload file or make sure format is image/jpeg");
      }
    } else {
      this.toastr.error("Error, please fill all the fields");
    }
  }

}

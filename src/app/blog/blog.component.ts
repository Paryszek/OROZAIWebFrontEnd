import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  data: any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.data = this.getPosts();
    this.data.map((res: Response) => res).subscribe(val => console.log(val));;
  }

  getPosts(): any{
    return this.http.get<any>('http://localhost:8080/posts');
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data: any;
  posts: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.data = this.getPosts();
    this.data.map((res: Response) => res).subscribe(val => this.posts = val);
  }
  getPosts(): any{
    return this.http.get<any>('http://localhost:8080/posts');
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment';
import { Post } from '../models/post';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class PostcommentService {

  BaseUri: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getPostByPagination(id: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>( this.BaseUri +"/posts?page=" + id);
  }

  getUserById(user_id?: number): Observable<User> {
    return this.httpClient.get<User>( this.BaseUri + "/users/" + user_id);
  }

  getPost(id: number): Observable<Post> {
    return this.httpClient.get<Post>( this.BaseUri + "/posts/" + id);
  }

  getComments(id: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>( this.BaseUri + "/comments?post_id=" + id);
  }
}

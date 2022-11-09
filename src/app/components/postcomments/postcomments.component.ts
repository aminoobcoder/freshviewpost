import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/comment';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostcommentService } from 'src/app/services/postcomment.service';

@Component({
  selector: 'app-postcomments',
  templateUrl: './postcomments.component.html',
  styleUrls: ['./postcomments.component.css']
})
export class PostcommentsComponent implements OnInit {

  userId!: number;
  postId!: number;
  post: Post;
  user: User;
  comments: Comment[] = [];

  constructor(private route : ActivatedRoute,
    private postcommentservice: PostcommentService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(parms => {
      this.postId = Number(parms.get("id"));
      this.userId = Number(parms.get("userId"));
    });

    this.postcommentservice.getPost(this.postId).subscribe( p => {
      this.post = p;
      console.log(this.post);
    });

    this.postcommentservice.getUserById(this.userId).subscribe( u => {
      this.user = u;
      console.log(this.user);
    });

    this.postcommentservice.getComments(this.postId).subscribe( c => {
      this.comments = c;
      console.log(this.comments);
    })
  }

}

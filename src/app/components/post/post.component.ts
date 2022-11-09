import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post, PostDeatils } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostcommentService } from 'src/app/services/postcomment.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  posts: Post[] = [];
  isCardClicked: boolean = true;
  user!: User;

  postUsers: PostDeatils[] = [];
  activeIndex: number = 0;
  constructor(private postcommentservice: PostcommentService,
    private router: Router) { }

  ngOnInit(): void {
    if(this.activeIndex != 0) {
      this.getPostDeatils(this.activeIndex)
    } else{
      this.getPostDeatils(1);
    }
  }

  getPostDeatils(pageNo: number) {
    this.postUsers = [];
    this.postcommentservice.getPostByPagination(pageNo).subscribe(response => {
      response.forEach(post => {
        this.postcommentservice.getUserById(post.user_id).subscribe(user => {
          this.postUsers.push({ post: post, user: user })
        })
      })
    });
  }

  onClickedPost(post: Post) {
    this.isCardClicked = false;
    this.router.navigate(['/post-comments'], { queryParams: { id: post.id, userId: post.user_id } });
  }

  onPageChange(event: any) {
    this.activeIndex = event.pageIndex + 1;
    this.getPostDeatils(event.pageIndex + 1);
    console.log(event);
  }

}

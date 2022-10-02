import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../../models/user.model';
import {Post} from '../../../../../models/post.model';
import {PostService} from '../../../../../services/post.service';
import {UserService} from '../../../../../services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['../../../../../../styles/app-layout/profile-page/post-article/posts/posts.component.scss']
})
export class PostsComponent implements OnInit {
  currentUser: User;
  posts: Post[];

  constructor(private postService: PostService, private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.getLoggedUser();
    if (this.currentUser) {
      this.posts = this.postService.getPostsByUser(this.currentUser.id);
      this.posts.forEach(post => {
        post.postUsername = this.currentUser.username;
        if (post.sharedPost) {
          const user: User = this.userService.getUserById(post.sharedPost.userId);
          post.sharedPost.postUsername = user.username;
        }
      });
    }
  }
}

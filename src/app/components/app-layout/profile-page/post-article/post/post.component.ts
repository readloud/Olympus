import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../../models/post.model';
import {User} from '../../../../../models/user.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['../../../../../../styles/app-layout/profile-page/post-article/post/post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() currentUser: User;

  constructor() { }

  ngOnInit() {
  }

  getLikeFriendsNames(post: Post): string {
    let names: string;
    if (post && post.likes) {
      names = post.likes[0].name + ', ' + post.likes[1].name;
    } else {
      names = post.sharedPost.likes[0].name + ', ' + post.sharedPost.likes[1].name;
    }
    return names;
  }
}

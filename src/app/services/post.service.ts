import {Injectable} from '@angular/core';
import {Post} from '../models/post.model';
import {POSTS} from '../olympus.data';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  getPostsByUser(userId: number): Post[] {
    return POSTS.filter((post) => post.userId === userId);
  }
}

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as PostsActions from './actions';
import { map, mergeMap } from "rxjs";
import { PostsService } from "src/app/services/posts.service";

@Injectable()
 export class PostsEffects {
  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.getPosts),
      mergeMap(() => {
      return this.postsService
      .getPosts()
      .pipe(map((posts) => PostsActions.getPostsSuccess({ posts })));
    }))
  )

  constructor(private actions$: Actions, private postsService: PostsService){}
 }

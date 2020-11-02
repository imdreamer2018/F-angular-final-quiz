import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {TrainersService} from '../../service/trainers.service';
import {loadTrainers, setTrainers} from '../actions/trainers.action';
import {loadGroups, postGroups, setGroups} from '../actions/groups.action';
import {GroupsService} from '../../service/groups.service';

@Injectable()
export class LoadGroupsEffect { // TODO GTB-4: - 类名不正确，可以叫GroupEffects
  loadGroupsEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadGroups),
      mergeMap(() => this.groupsService.getGroups().pipe(
        map(groups => setGroups({groups})),
        catchError(() => EMPTY)
      ))
    );
  });

  postGroupsEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(postGroups),
      mergeMap(() => this.groupsService.autoGrouping().pipe(
        map(groups => setGroups({groups})),
        catchError(() => EMPTY)
      ))
    );
  });

  constructor(private actions$: Actions,
              private groupsService: GroupsService) {
  }
}

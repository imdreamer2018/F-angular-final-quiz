import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {TrainersService} from '../../service/trainers.service';
import {loadTrainers, setTrainers} from '../actions/trainers.action';
import {loadGroups, setGroups} from '../actions/groups.action';
import {GroupsService} from '../../service/groups.service';

@Injectable()
export class LoadGroupsEffect {
  loadGroupsEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadGroups),
      mergeMap(() => this.groupsService.getGroups().pipe(
        map(groups => setGroups({groups})),
        catchError(() => EMPTY)
      ))
    );
  });

  constructor(private actions$: Actions,
              private groupsService: GroupsService) {
  }
}

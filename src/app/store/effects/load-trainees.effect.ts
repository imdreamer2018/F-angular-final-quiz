import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {loadTrainees, setTrainees} from '../actions/trainees.action';
import {TraineesService} from '../../service/trainees.service';

@Injectable()
export class LoadTraineesEffect {
  loadTraineesEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadTrainees),
      mergeMap(() => this.traineesService.getTrainees().pipe(
        map(trainees => setTrainees({trainees})),
        catchError(() => EMPTY)
      ))
    );
  });

  constructor(private actions$: Actions,
              private traineesService: TraineesService) {
  }
}

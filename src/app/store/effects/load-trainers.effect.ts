import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {TrainersService} from '../../service/trainers.service';
import {loadTrainers, setTrainers} from '../actions/trainers.action';

@Injectable()
export class LoadTrainersEffect {
  loadTrainersEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadTrainers),
      mergeMap(() => this.trainersService.getTrainers().pipe(
        map(trainers => setTrainers({trainers})),
        catchError(() => EMPTY)
      ))
    );
  });

  constructor(private actions$: Actions,
              private trainersService: TrainersService) {
  }
}

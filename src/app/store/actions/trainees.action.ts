import {createAction, props} from '@ngrx/store';
import {Trainee} from '../../trainee';

export const loadTrainees = createAction('[trainees component] load trainees');
export const setTrainees = createAction('[trainees component] set trainees', props<{ trainees: Trainee[]}>());

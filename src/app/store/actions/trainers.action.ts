import {createAction, props} from '@ngrx/store';
import {Trainer} from '../../trainer';

export const loadTrainers =  createAction('[trainers component] load trainers');
export const setTrainers = createAction('[trainers component] set trainers', props<{ trainers: Trainer[]}>());

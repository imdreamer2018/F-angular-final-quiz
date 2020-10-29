import {createReducer, on} from '@ngrx/store';
import {setTrainees} from '../actions/trainees.action';
import {Trainee} from '../../trainee';

const initializerTrainees: Trainee[] = [];

export const traineesReducer = createReducer(
  initializerTrainees,
  on(setTrainees, ((state, props) => props.trainees))
);

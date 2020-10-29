import {Trainer} from '../../trainer';
import {createReducer, on} from '@ngrx/store';
import {setTrainers} from '../actions/trainers.action';

const initializerTrainers: Trainer[] = [];

export const trainersReducer = createReducer(
  initializerTrainers,
  on(setTrainers, ((state, props) => props.trainers))
);

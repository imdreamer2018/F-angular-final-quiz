import {createReducer, on} from '@ngrx/store';
import {Group} from '../../group';
import {setGroups} from '../actions/groups.action';

const initializerGroups: Group[] = [];

export const groupsReducer = createReducer(
  initializerGroups,
  on(setGroups, ((state, props) => props.groups))
);

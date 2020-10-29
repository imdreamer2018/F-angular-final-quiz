import {createAction, props} from '@ngrx/store';
import {Group} from '../../group';

export const loadGroups = createAction('[groups component] load groups');
export const postGroups = createAction('[groups component] post groups');
export const setGroups = createAction('[groups component] set groups', props<{ groups: Group[]}>());

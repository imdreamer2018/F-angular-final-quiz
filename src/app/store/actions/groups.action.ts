import {createAction, props} from '@ngrx/store';
import {Group} from '../../group';

export const loadGroups = createAction('[groups component] load groups');
// TODO GTB-4: - Action命名不正确，postGroup含义不清晰
export const postGroups = createAction('[groups component] post groups');
export const setGroups = createAction('[groups component] set groups', props<{ groups: Group[]}>());

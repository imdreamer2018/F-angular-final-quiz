import {Trainee} from './trainee';
import {Trainer} from './trainer';
import {Group} from './group';

// TODO GTB-3: + AppState定义正确
export interface AppState {
  trainees: Trainee[];
  trainers: Trainer[];
  groups: Group[];
}

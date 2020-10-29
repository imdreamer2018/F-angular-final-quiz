import {Trainee} from './trainee';
import {Trainer} from './trainer';
import {Group} from './group';


export interface AppState {
  trainees: Trainee[];
  trainers: Trainer[];
  groups: Group[];
}

import {Trainer} from './trainer';
import {Trainee} from './trainee';

export interface Group {
  id: number;
  name: string;
  trainer: Trainer[];
  trainee: Trainee[];
}

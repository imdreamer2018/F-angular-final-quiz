import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {groupsReducer} from './store/reducers/groups.reducer';
import {traineesReducer} from './store/reducers/trainees.reducer';
import {trainersReducer} from './store/reducers/trainers.reducer';

@NgModule({
  imports: [StoreModule.forRoot({
    groups: groupsReducer,
    trainees: traineesReducer,
    trainers: trainersReducer,
  })],
  exports: [StoreModule]
})
export class AppStoreModule{ }

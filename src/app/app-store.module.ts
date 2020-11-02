import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {groupsReducer} from './store/reducers/groups.reducer';
import {traineesReducer} from './store/reducers/trainees.reducer';
import {trainersReducer} from './store/reducers/trainers.reducer';

// TODO GTB-3: + 子模块定义正确
// TODO GTB-4: + 状态相关逻辑单独抽象出一个模块是比较好的实践
// TODO GTB-4: - EffectsModule应该也放到这个子模块中
@NgModule({
  imports: [StoreModule.forRoot({
    groups: groupsReducer,
    trainees: traineesReducer,
    trainers: trainersReducer,
  })],
  exports: [StoreModule]
})
export class AppStoreModule{ }

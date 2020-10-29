import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GroupsComponent } from './groups/groups.component';
import { TraineesComponent } from './trainees/trainees.component';
import { TrainersComponent } from './trainers/trainers.component';
import {AppStoreModule} from './app-store.module';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {LoadTrainersEffect} from './store/effects/load-trainers.effect';
import {LoadTraineesEffect} from './store/effects/load-trainees.effect';
import {LoadGroupsEffect} from './store/effects/load-groups-effect';

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    TraineesComponent,
    TrainersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppStoreModule,
    HttpClientModule,
    EffectsModule.forRoot([LoadTrainersEffect, LoadTraineesEffect, LoadGroupsEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

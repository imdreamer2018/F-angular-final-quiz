import { Component, OnInit } from '@angular/core';
import {Trainer} from '../trainer';
import {Store} from '@ngrx/store';
import {selectorTrainers} from '../store/selectors/trainers.selector';
import {loadTrainers} from '../store/actions/trainers.action';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {
  trainers: Trainer[];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectorTrainers).subscribe(trainers => this.trainers = trainers);
    this.store.dispatch(loadTrainers());
  }

}

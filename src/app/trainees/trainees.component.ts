import { Component, OnInit } from '@angular/core';
import {Trainee} from '../trainee';
import {Store} from '@ngrx/store';
import {selectorTrainees} from '../store/selectors/trainees.selector';
import {loadTrainees} from '../store/actions/trainees.action';

@Component({
  selector: 'app-trainees',
  templateUrl: './trainees.component.html',
  styleUrls: ['./trainees.component.scss']
})
export class TraineesComponent implements OnInit {
  trainees: Trainee[];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectorTrainees).subscribe(trainees => this.trainees = trainees);
    this.store.dispatch(loadTrainees());
  }

}

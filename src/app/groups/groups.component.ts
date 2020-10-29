import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Group} from '../group';
import {selectorGroups} from '../store/selectors/groups.selector';
import {loadGroups, postGroups} from '../store/actions/groups.action';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups: Group[];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectorGroups).subscribe(groups => this.groups = groups);
    this.store.dispatch(loadGroups());
  }

  autoGrouping(): void {
    this.store.dispatch(postGroups());
  }

}

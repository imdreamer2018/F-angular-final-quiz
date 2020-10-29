import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Trainee} from '../trainee';
import {HttpClient} from '@angular/common/http';
import {Group} from '../group';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient) { }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>('http://127.0.0.1:8080/groups');
  }
}

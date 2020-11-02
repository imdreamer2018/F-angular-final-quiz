import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Trainee} from '../trainee';
import {HttpClient} from '@angular/common/http';
import {Group} from '../group';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient) { }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>('http://127.0.0.1:8080/groups');
  }

  // TODO GTB-1: - 分组请求需要处理异常
  autoGrouping(): Observable<Group[]> {
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json;charset=UTF-8',
        'Content-Type': 'application/json',
        Cache: 'no-cache',
      }
    };
    return this.http.post<Group[]>('http://127.0.0.1:8080/groups/auto-grouping', requestOptions);
  }
}

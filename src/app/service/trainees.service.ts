import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Trainer} from '../trainer';
import {HttpClient} from '@angular/common/http';
import {Trainee} from '../trainee';

@Injectable({
  providedIn: 'root'
})
export class TraineesService {

  constructor(private http: HttpClient) { }

  getTrainees(): Observable<Trainee[]> {
    return this.http.get<Trainee[]>('http://127.0.0.1:8080/trainees');
  }
}

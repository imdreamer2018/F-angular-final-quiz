import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Trainer} from '../trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainersService {

  constructor(private http: HttpClient) {
  }

  getTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>('http://127.0.0.1:8080/trainers');
  }
}

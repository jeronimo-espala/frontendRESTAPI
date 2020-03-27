import { Disciplina } from './disciplina';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {

  private readonly API = '/api/disciplinas/';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Disciplina[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log)
    );
  }
}

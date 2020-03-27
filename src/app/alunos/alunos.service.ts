import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Aluno } from './aluno';
import { tap, delay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private readonly API = '/api/alunos/';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Aluno[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log)
    );
  }

  
}

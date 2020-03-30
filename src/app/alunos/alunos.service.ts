import { CrudService } from './../shared/crud-service';
import { Disciplina } from './../disciplinas/disciplina';
import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Aluno } from './aluno';
import { tap, delay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AlunosService extends CrudService<Aluno> {

  private readonly API = '/api/alunos/';

  private readonly APIdisc = '/api/disciplinas/';

  constructor(protected http: HttpClient) {
    super(http,'/api/alunos/');

   }

  /*list(){
    return this.http.get<Aluno[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log)
    );
  }*/

  listDisc() {
    return this.http.get<Disciplina>(this.APIdisc)
    .pipe(
      tap(console.log)
    );

   }


}

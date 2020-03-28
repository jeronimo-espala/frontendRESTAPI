import { Professor } from './../professores/professor';
import { CrudService } from './../shared/crud-service';
import { Disciplina } from './disciplina';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService extends CrudService<Disciplina>{

  //private readonly API = '/api/disciplinas/';
  private readonly APIprof = '/api/professores/';

  constructor(protected http: HttpClient) {
    super(http,'/api/disciplinas/');
   }

   listProf() {
    return this.http.get<Professor>(this.APIprof)
    .pipe(
      delay(2000),
      tap(console.log)
    );

   }
}

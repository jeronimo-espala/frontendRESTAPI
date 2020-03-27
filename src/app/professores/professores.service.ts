import { delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Professor } from './professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  private readonly API = '/api/professores/';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Professor[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log)
    );
  }
}

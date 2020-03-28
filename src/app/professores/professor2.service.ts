import { Professor } from './professor';
import { CrudService } from '../shared/crud-service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Professor2Service extends CrudService<Professor> {

  constructor(protected http: HttpClient) {
    super(http, '/api/professores/');
   }


}

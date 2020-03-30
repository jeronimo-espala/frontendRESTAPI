import { AlunosService } from './../alunos.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Aluno } from '../aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoResolverGuard implements Resolve<Aluno> {


  constructor(private service: AlunosService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Aluno> {

    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }

    return of({

      id: null,
      nome: null,
      matricula: null,
      cargaHoraria: null,
      dataNascimento :null,
      cpf: null,
      disciplina: null


    });
  }



}

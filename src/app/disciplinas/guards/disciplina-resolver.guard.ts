import { DisciplinasService } from './../disciplinas.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Disciplina } from '../disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaResolverGuard implements Resolve<Disciplina> {

  constructor(private service: DisciplinasService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Disciplina> {

    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }

    return of({

      id: null,
      nome: null,
      descricao: null,
      cargaHoraria: null,
      ativa :null,
      professor: null


    });
  }



}

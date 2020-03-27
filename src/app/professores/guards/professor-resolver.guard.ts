import { ProfessoresService } from './../professores.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Professor } from '../professor';

@Injectable({
  providedIn: 'root'
})

export class ProfessorResolverGuard implements Resolve<Professor> {
  
  constructor(private service: ProfessoresService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Professor> {
    
    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }

    return of({

      id: null,
      nome: null,
      matricula: null,
      area: null,
      data:null


    });
  }
}

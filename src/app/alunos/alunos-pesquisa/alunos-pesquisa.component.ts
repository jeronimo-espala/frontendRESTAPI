import { AlertModalService } from './../../shared/alert-modal.service';
import { AlunosService } from './../alunos.service';
import { tap, map, filter, distinctUntilChanged, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { CrudService } from './../../shared/crud-service';
import { Observable, empty } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-alunos-pesquisa',
  templateUrl: './alunos-pesquisa.component.html',
  styleUrls: ['./alunos-pesquisa.component.scss']
})
export class AlunosPesquisaComponent implements OnInit {

  queryField = new FormControl();
  results$: Observable<any>;


  constructor(private service: AlunosService,private modal: AlertModalService) { }

  ngOnInit(): void {

    this.results$ = this.queryField.valueChanges.pipe(


      debounceTime(200),
      distinctUntilChanged(),
      switchMap(value => this.service.loadByID(value).pipe(

        catchError(err => {return empty}),
        tap(console.log)

      ))


    );
  }


}

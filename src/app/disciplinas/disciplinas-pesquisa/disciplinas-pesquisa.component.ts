import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap } from 'rxjs/operators';
import { AlertModalService } from './../../shared/alert-modal.service';
import { DisciplinasService } from './../disciplinas.service';
import { Component, OnInit } from '@angular/core';
import { empty, EMPTY } from 'rxjs/internal/observable/empty';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-disciplinas-pesquisa',
  templateUrl: './disciplinas-pesquisa.component.html',
  styleUrls: ['./disciplinas-pesquisa.component.scss']
})
export class DisciplinasPesquisaComponent implements OnInit {

  queryField = new FormControl();
  results$: Observable<any>;


  constructor(private service: DisciplinasService,private modal: AlertModalService) { }

  ngOnInit(): void {

    this.results$ = this.queryField.valueChanges.pipe(


      debounceTime(200),
      distinctUntilChanged(),
      switchMap(value => this.service.loadByID(value).pipe(

        catchError(err => {return EMPTY}),
        tap(console.log)

      ))


    );
  }

}

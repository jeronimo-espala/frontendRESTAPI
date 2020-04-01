import { debounceTime, distinctUntilChanged, switchMap, catchError, tap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { FormControl } from '@angular/forms';
import { AlertModalService } from './../../shared/alert-modal.service';
import { ProfessoresService } from './../professores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores-pesquisa',
  templateUrl: './professores-pesquisa.component.html',
  styleUrls: ['./professores-pesquisa.component.scss']
})
export class ProfessoresPesquisaComponent implements OnInit {

  queryField = new FormControl();
  results$: Observable<any>;


  constructor(private service: ProfessoresService,private modal: AlertModalService) { }

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

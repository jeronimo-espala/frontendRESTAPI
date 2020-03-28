import { CrudService } from './../../shared/crud-service';
import { DisciplinasService } from './../disciplinas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplinas-form',
  templateUrl: './disciplinas-form.component.html',
  styleUrls: ['./disciplinas-form.component.scss']
})
export class DisciplinasFormComponent implements OnInit {

  constructor(private service: DisciplinasService) { }

  ngOnInit(): void {
  }

  onRefresh() {
    this.disciplinas$ = this.service.list()
    .pipe(
      catchError( error => {
        console.error(error);
        //this.error$.next(true);
        this.handleError();
        return empty();

      })
    )
  }

}

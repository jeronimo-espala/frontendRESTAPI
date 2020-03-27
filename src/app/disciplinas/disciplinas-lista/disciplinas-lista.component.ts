import { AlertModalService } from './../../shared/alert-modal.service';
import { DisciplinasService } from './../disciplinas.service';
import { Disciplina } from './../disciplina';
import { Component, OnInit } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Component({
  selector: 'app-disciplinas-lista',
  templateUrl: './disciplinas-lista.component.html',
  styleUrls: ['./disciplinas-lista.component.scss'],
  preserveWhitespaces: true
})
export class DisciplinasListaComponent implements OnInit {

  disciplinas$: Observable<Disciplina[]>

  constructor(private service: DisciplinasService, private alertService: AlertModalService) { }

  ngOnInit(): void {

    this.onRefresh();
    
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
  
  handleError(){
    this.alertService.showAlertDanger('Erro ao carregar alunos. Tenta novamente mais tarde.');
    //this.bsModalRef = this.modalService.show(AlertModalComponent);
    //this.bsModalRef.content.type = 'danger';
    //this.bsModalRef.content.message = 'Erro ao carregar alunos. Tenta novamente mais tarde.';
  }

}

import { AlertModalService } from './../../shared/alert-modal.service';
import { DisciplinasService } from './../disciplinas.service';
import { Disciplina } from './../disciplina';
import { Component, OnInit } from '@angular/core';
import { Observable, empty, EMPTY } from 'rxjs';
import { catchError, take, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-disciplinas-lista',
  templateUrl: './disciplinas-lista.component.html',
  styleUrls: ['./disciplinas-lista.component.scss'],
  preserveWhitespaces: true
})
export class DisciplinasListaComponent implements OnInit {

  disciplinas$: Observable<Disciplina[]>;

  disciplinaSelecionada: Disciplina;

  constructor(private service: DisciplinasService, private alertService: AlertModalService,
    private router: Router, private route: ActivatedRoute) { }

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

  onEdit(id) {

    this.router.navigate(['editar',id],{ relativeTo: this.route});

  }

  onDelete(disciplina) {

    this.disciplinaSelecionada = disciplina;
    //this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover?')
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.service.remove(disciplina.id) : EMPTY)
    )
    .subscribe(
      success => {
        this.onRefresh(),
        this.alertService.showAlertSuccess('Disciplina excluida com sucesso')
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover disciplina. Tente Novamente!')
      }

    )

  }


  handleError(){
    this.alertService.showAlertDanger('Erro ao carregar alunos. Tenta novamente mais tarde.');
    //this.bsModalRef = this.modalService.show(AlertModalComponent);
    //this.bsModalRef.content.type = 'danger';
    //this.bsModalRef.content.message = 'Erro ao carregar alunos. Tenta novamente mais tarde.';
  }

}

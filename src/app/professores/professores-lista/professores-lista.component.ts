import { Professor2Service } from './../professor2.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalService } from './../../shared/alert-modal.service';
import { ProfessoresService } from './../professores.service';
import { Observable, empty, EMPTY } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Professor } from './../professor';
import { catchError, switchMap, take, tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-professores-lista',
  templateUrl: './professores-lista.component.html',
  styleUrls: ['./professores-lista.component.scss'],
  preserveWhitespaces: true
})
export class ProfessoresListaComponent implements OnInit {

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal;

  professores$: Observable<Professor[]>

  professorSelecionado: Professor;

  constructor(private service: Professor2Service, private alertService: AlertModalService,
    private router: Router, private route: ActivatedRoute, private modalService: BsModalService) { }

  ngOnInit(): void {

    this.onRefresh();
  }

  onRefresh() {
    this.professores$ = this.service.list()
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
    this.alertService.showAlertDanger('Erro ao carregar professores. Tenta novamente mais tarde.');
    //this.bsModalRef = this.modalService.show(AlertModalComponent);
    //this.bsModalRef.content.type = 'danger';
    //this.bsModalRef.content.message = 'Erro ao carregar alunos. Tenta novamente mais tarde.';
  }

  onEdit(id) {

    this.router.navigate(['editar',id],{ relativeTo: this.route});

  }

  onDelete(professor) {

    this.professorSelecionado = professor;
    //this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover?')
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.service.remove(professor.matricula) : EMPTY),
      tap(console.log)
    )
    .subscribe(
      success => {

        this.alertService.showAlertSuccess('Professor removido com sucesso!')
        this.onRefresh()

      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover professor. Tente Novamente!')
      }

    )

  }

  onConfirmDelete() {
    this.service.remove(this.professorSelecionado.matricula)
    .subscribe(
      success => {
        this.onRefresh(),
        this.deleteModalRef.hide()
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover professor. Tente Novamente!'),
        this.deleteModalRef.hide()
      }
    );


  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

}

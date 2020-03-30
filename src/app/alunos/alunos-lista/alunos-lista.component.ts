import { Router, ActivatedRoute } from '@angular/router';
import { AlertModalService } from '../../shared/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';
import { Observable, Subject, empty, EMPTY } from 'rxjs';
import { catchError, take, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-alunos-lista',
  templateUrl: './alunos-lista.component.html',
  styleUrls: ['./alunos-lista.component.scss'],
  preserveWhitespaces: true
})
export class AlunosListaComponent implements OnInit {

  //alunos: Curso[];

  //bsModalRef: BsModalRef;

  alunos$: Observable<Aluno[]>;
  error$ = new Subject<boolean>();

  alunoSelecionado: Aluno;

  constructor(private service: AlunosService,private alertService: AlertModalService,
    private router: Router, private route: ActivatedRoute ) {}
  //private modalService: BsModalService) { }

  ngOnInit(): void {
    //this.service.list().
    //subscribe(dados => this.alunos = dados);
    this.onRefresh();

  }

  onRefresh(){

    this.alunos$ = this.service.list()
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

  onEdit(id) {

    this.router.navigate(['editar',id],{ relativeTo: this.route});

  }

  onDelete(aluno) {

    this.alunoSelecionado = aluno;
    //this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover?')
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.service.remove(aluno.matricula) : EMPTY)
    )
    .subscribe(
      success => {
        this.onRefresh(),
        this.alertService.showAlertSuccess('Aluno excluido com sucesso')
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover aluno. Tente Novamente!')
      }

    )

  }

}

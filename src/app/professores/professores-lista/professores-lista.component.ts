import { AlertModalService } from './../../shared/alert-modal.service';
import { ProfessoresService } from './../professores.service';
import { Observable, empty } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Professor } from './../professor';
import { catchError } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-professores-lista',
  templateUrl: './professores-lista.component.html',
  styleUrls: ['./professores-lista.component.scss'],
  preserveWhitespaces: true
})
export class ProfessoresListaComponent implements OnInit {

  professores$: Observable<Professor[]>

  constructor(private service: ProfessoresService, private alertService: AlertModalService,
    private router: Router, private route: ActivatedRoute) { }

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
    this.alertService.showAlertDanger('Erro ao carregar alunos. Tenta novamente mais tarde.');
    //this.bsModalRef = this.modalService.show(AlertModalComponent);
    //this.bsModalRef.content.type = 'danger';
    //this.bsModalRef.content.message = 'Erro ao carregar alunos. Tenta novamente mais tarde.';
  }

  onEdit(id) {

    this.router.navigate(['editar',id],{ relativeTo: this.route});

  }

}

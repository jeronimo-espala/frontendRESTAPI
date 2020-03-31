import { CrudService } from './../../shared/crud-service';
import { Location } from '@angular/common';
import { AlertModalService } from './../../shared/alert-modal.service';
import { tap } from 'rxjs/operators';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss']
})
export class AlunosFormComponent implements OnInit {

  form: FormGroup;
  disciplinas: any[];

  submitted = false;

  constructor(private fb: FormBuilder,private service: AlunosService, private route: ActivatedRoute,
    private modal: AlertModalService, private location: Location) { }

  ngOnInit(): void {

    this.service.listDisc().
    subscribe(dados => this.disciplinas = dados);

    const aluno = this.route.snapshot.data['aluno'];

    this.form = this.fb.group({
      id: [aluno.id],
      nome: [aluno.nome, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      cpf: [aluno.cpf,[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      dataNascimento: [aluno.dataNascimento,[Validators.required]],
      matricula: [aluno.matricula,[Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
      disciplinas: [aluno.disciplinas]


    });


  }

  compararDisciplinas(obj1, obj2) {
    return obj1 && obj2 ? (obj1.id === obj2.id) : obj1 === obj2;
  }

  hasError(field: string) {

    return this.form.get(field).errors;
  }

  onSubmit() {

    this.submitted = true;

    console.log(this.form.value);
    if(this.form.valid) {

      console.log('submit');

      let msgSuccess = 'Aluno criado com sucesso';
      let msgError = 'Erro ao criar aluno curso, tente novamente!';

      if(this.form.value.id) {
        msgSuccess = 'Aluno atualizado com sucesso';
        msgError = 'Erro ao atualizar aluno, tente novamente!';

      }

      this.service.save(this.form.value).subscribe(
        success => { this.modal.showAlertSuccess(msgSuccess),
        this.location.back()},

        error => this.modal.showAlertDanger(msgError)
      );
    }

  }

}

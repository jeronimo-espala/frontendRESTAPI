import { Professor2Service } from './../professor2.service';
import { AlertModalService } from './../../shared/alert-modal.service';
import { ProfessoresService } from './../professores.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-professores-form',
  templateUrl: './professores-form.component.html',
  styleUrls: ['./professores-form.component.scss']
})
export class ProfessoresFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private service: Professor2Service, private modal: AlertModalService,
    private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {


    const professor = this.route.snapshot.data['professor'];

    this.form = this.fb.group({

      id: [professor.id],
      nome: [professor.nome, [Validators.required,Validators.minLength(1),Validators.maxLength(50)]],
      matricula: [professor.matricula, [Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
      area: [professor.area, [Validators.minLength(1),Validators.maxLength(200)]],
      dataNascimento: [professor.dataNascimento, [Validators.required]]
    });

  }


  hasError(field: string) {

    return this.form.get(field).errors;
  }

  onSubmit() {

    this.submitted = true;

    console.log(this.form.value);
    if(this.form.valid) {

      console.log('submit');

      let msgSuccess = 'Professor criado com sucesso';
      let msgError = 'Erro ao criar professor curso, tente novamente!';

      if(this.form.value.id) {
        msgSuccess = 'Professor atualizado com sucesso';
        msgError = 'Erro ao atualizar professor, tente novamente!';

      }

      this.service.save(this.form.value).subscribe(
        success => { this.modal.showAlertSuccess(msgSuccess),
        this.location.back()},

        error => this.modal.showAlertDanger(msgError)
      );

    }

  }

  onCancel() {

    this.submitted = false;
    this.form.reset();
  }
}

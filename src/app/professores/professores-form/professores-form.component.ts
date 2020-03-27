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

  constructor(private fb: FormBuilder, private service: ProfessoresService, private modal: AlertModalService,
    private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.
    pipe(
      map((params: any) => params['id']),
      switchMap(id => this.service.loadByID(id))
    )
    .subscribe(professor => this.updateForm(professor));

    this.form = this.fb.group({

      id: [null],
      nome: [null, [Validators.required,Validators.minLength(1),Validators.maxLength(50)]],
      matricula: [null, [Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
      area: [null, [Validators.minLength(1),Validators.maxLength(200)]],
      dataNascimento: [null, [Validators.required]]
    });

  }

  updateForm(professor) {
    this.form.patchValue({
      id: professor.id,
      nome: professor.nome,
      matricula: professor.matricula,
      area: professor.area,
      dataNascimento: professor.dataNascimento
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
      this.service.create(this.form.value).subscribe(
        success =>{
          this.modal.showAlertSuccess('Professor criado com sucesso'),
          this.location.back();
        },  
        error => this.modal.showAlertDanger('Erro ao professor curso, tente novamente!'),
        () => console.log('request completo')
      );
    }

  }

  onCancel() {

    this.submitted = false;
    this.form.reset();
    //console.log('onCancel');
  }
}
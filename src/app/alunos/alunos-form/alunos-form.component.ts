import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss']
})
export class AlunosFormComponent implements OnInit {

  form: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      CPF: [null,[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      data: [null,[Validators.required]],
      matricula: [null,[Validators.required,Validators.minLength(6),Validators.maxLength(6)]]
    });

    
  }

}

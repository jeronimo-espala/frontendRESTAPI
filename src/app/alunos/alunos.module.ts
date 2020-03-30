import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosListaComponent } from './alunos-lista/alunos-lista.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosPesquisaComponent } from './alunos-pesquisa/alunos-pesquisa.component';


@NgModule({
  declarations: [AlunosListaComponent, AlunosFormComponent, AlunosPesquisaComponent],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    ReactiveFormsModule
  ]
})
export class CursosModule { }

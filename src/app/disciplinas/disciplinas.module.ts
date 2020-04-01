import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinasRoutingModule } from './disciplinas-routing.module';
import { DisciplinasListaComponent } from './disciplinas-lista/disciplinas-lista.component';
import { DisciplinasFormComponent } from './disciplinas-form/disciplinas-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisciplinasPesquisaComponent } from './disciplinas-pesquisa/disciplinas-pesquisa.component';


@NgModule({
  declarations: [DisciplinasListaComponent, DisciplinasFormComponent, DisciplinasPesquisaComponent],
  imports: [
    CommonModule,
    DisciplinasRoutingModule,
    ReactiveFormsModule
  ]
})
export class DisciplinasModule { }

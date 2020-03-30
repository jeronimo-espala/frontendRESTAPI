import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinasRoutingModule } from './disciplinas-routing.module';
import { DisciplinasListaComponent } from './disciplinas-lista/disciplinas-lista.component';
import { DisciplinasFormComponent } from './disciplinas-form/disciplinas-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DisciplinasListaComponent, DisciplinasFormComponent],
  imports: [
    CommonModule,
    DisciplinasRoutingModule,
    ReactiveFormsModule
  ]
})
export class DisciplinasModule { }

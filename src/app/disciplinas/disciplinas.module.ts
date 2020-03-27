import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinasRoutingModule } from './disciplinas-routing.module';
import { DisciplinasListaComponent } from './disciplinas-lista/disciplinas-lista.component';


@NgModule({
  declarations: [DisciplinasListaComponent],
  imports: [
    CommonModule,
    DisciplinasRoutingModule
  ]
})
export class DisciplinasModule { }

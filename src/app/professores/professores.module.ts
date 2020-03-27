import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessoresRoutingModule } from './professores-routing.module';
import { ProfessoresListaComponent } from './professores-lista/professores-lista.component';
import { ProfessoresFormComponent } from './professores-form/professores-form.component';


@NgModule({
  declarations: [ProfessoresListaComponent, ProfessoresFormComponent],
  imports: [
    CommonModule,
    ProfessoresRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfessoresModule { }

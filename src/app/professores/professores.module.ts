import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessoresRoutingModule } from './professores-routing.module';
import { ProfessoresListaComponent } from './professores-lista/professores-lista.component';


@NgModule({
  declarations: [ProfessoresListaComponent],
  imports: [
    CommonModule,
    ProfessoresRoutingModule
  ]
})
export class ProfessoresModule { }

import { ProfessoresFormComponent } from './professores-form/professores-form.component';
import { ProfessoresListaComponent } from './professores-lista/professores-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: ProfessoresListaComponent
  },
  { 
    path: 'novo', component: ProfessoresFormComponent
  },
  {
    path: 'editar/:id', component: ProfessoresFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessoresRoutingModule { }

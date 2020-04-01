import { ProfessoresPesquisaComponent } from './professores-pesquisa/professores-pesquisa.component';
import { ProfessorResolverGuard } from './guards/professor-resolver.guard';
import { ProfessoresFormComponent } from './professores-form/professores-form.component';
import { ProfessoresListaComponent } from './professores-lista/professores-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: ProfessoresListaComponent
  },
  {
    path: 'novo', component: ProfessoresFormComponent,
    resolve: {
      professor: ProfessorResolverGuard
    }
  },
  {
    path: 'editar/:id', component: ProfessoresFormComponent,
    resolve: {
      professor: ProfessorResolverGuard
    }

  },
  {
    path: 'pesquisa', component: ProfessoresPesquisaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessoresRoutingModule { }

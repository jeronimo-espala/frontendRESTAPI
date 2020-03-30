import { AlunoResolverGuard } from './guards/aluno-resolver.guard';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosListaComponent } from './alunos-lista/alunos-lista.component';
import { AlunosPesquisaComponent } from './alunos-pesquisa/alunos-pesquisa.component';


const routes: Routes = [
  {
    path: '', component: AlunosListaComponent
  },
  {
    path: 'novo', component: AlunosFormComponent,
    resolve: {
      aluno: AlunoResolverGuard
    }
  },
  {
    path: 'editar/:id', component: AlunosFormComponent,
    resolve: {
      aluno: AlunoResolverGuard
    }
  },
  {
    path: 'pesquisa', component: AlunosPesquisaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }

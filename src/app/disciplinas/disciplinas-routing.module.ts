import { DisciplinasPesquisaComponent } from './disciplinas-pesquisa/disciplinas-pesquisa.component';
import { DisciplinaResolverGuard } from './guards/disciplina-resolver.guard';
import { DisciplinasFormComponent } from './disciplinas-form/disciplinas-form.component';
import { DisciplinasListaComponent } from './disciplinas-lista/disciplinas-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: DisciplinasListaComponent
  },
  {
    path: 'novo',
    component: DisciplinasFormComponent,
    resolve: {
      disciplina: DisciplinaResolverGuard
    }
  },
  {
    path: 'editar/:id', component: DisciplinasFormComponent,
    resolve: {
      disciplina: DisciplinaResolverGuard
    }

  },
  {
    path: 'pesquisa', component: DisciplinasPesquisaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinasRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'alunos',
    loadChildren: () => import('./Alunos/alunos.module').then(m => m.CursosModule)
  },
  {
    path: 'disciplinas',
    loadChildren: () => import('./disciplinas/disciplinas.module').then(m => m.DisciplinasModule)
  },
  {
    path: 'professores',
    loadChildren: () => import('./professores/professores.module').then(m => m.ProfessoresModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

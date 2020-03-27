import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosListaComponent } from './alunos-lista/alunos-lista.component';


const routes: Routes = [
  { path: '', component: AlunosListaComponent},
  { path: 'novo', component: AlunosFormComponent},
  { path: 'editar/:id', component: AlunosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }

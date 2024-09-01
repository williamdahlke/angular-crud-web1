import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarCursoComponent, InserirCursoComponent, ListarCursoComponent } from './curso';
import { EditarAlunoComponent, InserirAlunoComponent, ListarAlunoComponent } from './aluno';

const routes: Routes = [
  { path: '',
    redirectTo: 'cursos/listar',
    pathMatch: 'full'},
  { path: 'cursos',
    redirectTo: 'cursos/listar'},
  { path: 'cursos/listar',
    component: ListarCursoComponent},
  { path: 'cursos/novo',
    component: InserirCursoComponent},
  { path: 'cursos/editar/:id',
    component: EditarCursoComponent},
  { path: 'alunos',
    redirectTo: 'alunos/listar'},
  { path: 'alunos/listar',
    component: ListarAlunoComponent},
  { path: 'alunos/novo',
    component: InserirAlunoComponent},
  { path: 'alunos/editar/:id',
    component: EditarAlunoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

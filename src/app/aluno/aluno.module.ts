import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { InserirAlunoComponent } from './inserir-aluno/inserir-aluno.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { AlunoService } from './services/aluno.service';



@NgModule({
  declarations: [
    ListarAlunoComponent,
    InserirAlunoComponent,
    EditarAlunoComponent
  ],
  imports: [
    CommonModule
  ],

  providers: [
    AlunoService
  ]


})
export class AlunoModule { }

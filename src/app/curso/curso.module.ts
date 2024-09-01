import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCursoComponent } from './listar-curso/listar-curso.component';
import { InserirCursoComponent } from './inserir-curso/inserir-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { CursoService } from './services/curso.service';

@NgModule({
  declarations: [
    ListarCursoComponent,
    InserirCursoComponent,
    EditarCursoComponent
  ],

  imports: [
    CommonModule
  ],

  exports: [
    ListarCursoComponent    
  ],

  providers: [
    CursoService
  ]
})
export class CursoModule { }

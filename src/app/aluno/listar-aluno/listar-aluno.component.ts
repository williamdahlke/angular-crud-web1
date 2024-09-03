import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../../shared/models/aluno.model';


@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrl: './listar-aluno.component.css'
})

export class ListarAlunoComponent implements OnInit{
  constructor(private service : AlunoService){
  }

  alunos : Aluno[] = [];

  ngOnInit(): void {
    this.alunos = this.listarAlunos();
  }

  listarAlunos() : Aluno[]{
    return this.service.listarTodos();
  }

  remover($event : any, aluno : Aluno){
    if (aluno.id != undefined) {
      this.service.remover(aluno.id);
    }
    window.location.reload();
  }
}

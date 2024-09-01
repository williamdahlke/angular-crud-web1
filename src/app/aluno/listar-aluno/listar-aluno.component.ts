import { Component } from '@angular/core';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrl: './listar-aluno.component.css'
})
export class ListarAlunoComponent {
  constructor(private service : AlunoService){

  }
}

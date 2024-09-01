import { Component } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-aluno',
  templateUrl: './inserir-aluno.component.html',
  styleUrl: './inserir-aluno.component.css'
})
export class InserirAlunoComponent {
  constructor(private service : AlunoService,
              private router : Router){

  }
}

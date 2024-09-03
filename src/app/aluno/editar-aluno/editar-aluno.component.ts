import { Component, OnInit, ViewChild } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../../shared/models/aluno.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrl: './editar-aluno.component.css'
})
export class EditarAlunoComponent implements OnInit {
  constructor(private service : AlunoService,
              private route : ActivatedRoute,
              private router : Router){

  }
  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    // Com o id, obtém a pessoa
    const res = this.service.buscarPorId(id);
    if (res !== undefined)
    this.aluno = res;
    else
      throw new Error ("Pessoa não encontrada: id = " + id);
  }

  @ViewChild('formAluno') formAluno! : NgForm;
  aluno : Aluno = new Aluno();

  atualizar(): void {
    // Verifica se o formulário é válido
    if (this.formAluno.form.valid) {
    // Efetivamente atualiza a o aluno
    this.service.alterar(this.aluno);
    this.router.navigate(['/alunos']);
    }
    }
    
}

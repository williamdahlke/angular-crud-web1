import { Component } from '@angular/core';
import { CursoService } from '../services/curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-curso',
  templateUrl: './inserir-curso.component.html',
  styleUrl: './inserir-curso.component.css'
})
export class InserirCursoComponent {
  constructor(service : CursoService, 
              router : Router){

  }
}

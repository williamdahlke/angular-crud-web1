import { Component } from '@angular/core';
import { CursoService } from '../services/curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  styleUrl: './listar-curso.component.css'
})
export class ListarCursoComponent {
  constructor(service : CursoService){
  }
}

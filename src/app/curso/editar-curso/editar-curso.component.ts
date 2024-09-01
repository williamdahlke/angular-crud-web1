import { Component, OnInit } from '@angular/core';
import { CursoService } from '../services/curso.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrl: './editar-curso.component.css'
})
export class EditarCursoComponent implements OnInit{
  constructor(service : CursoService,
              route : ActivatedRoute,
              router : Router){

  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

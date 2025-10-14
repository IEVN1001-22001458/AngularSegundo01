import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Multiplicacion } from './aporb';

@Component({
  selector: 'app-apor-b',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './apor-b.component.html',
  styleUrl: './apor-b.component.css'
})
export class AporBComponent {
  formulario!: FormGroup;
  resultadoTexto: string = '';
  objOperacion = new Multiplicacion();

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl(''),
      numero2: new FormControl('')
    });
  }

  mulNumeros(): void {
    let n1 = this.formulario.value.numero1;
    let n2 = this.formulario.value.numero2;

    this.objOperacion.numeroA = n1;
    this.objOperacion.numeroB = n2;

    let resultadoCalculado = this.objOperacion.calcularConSumas();

    this.resultadoTexto = `${n1} x ${n1} x ${n1} x ${n1}= ${resultadoCalculado}`;
  }
}


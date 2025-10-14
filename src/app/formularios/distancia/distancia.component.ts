import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculoDistancia } from './distancia';


@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario!: FormGroup;
  resultado!: number;
  objCalculo = new CalculoDistancia();


  constructor(){ }

  ngOnInit(): void{
    this.formulario = new FormGroup({
      x1: new FormControl(''),
      y1: new FormControl(''),
      x2: new FormControl(''),
      y2: new FormControl('')
    });
  }
calcularDistancia(): void {
    let xUno = this.formulario.value.x1;
    let yUno = this.formulario.value.y1;
    let xDos = this.formulario.value.x2;
    let yDos = this.formulario.value.y2;

    this.objCalculo.x1 = xUno;
    this.objCalculo.y1 = yUno;
    this.objCalculo.x2 = xDos;
    this.objCalculo.y2 = yDos;

    this.objCalculo.calcular();
    this.resultado = this.objCalculo.resultado;

  }
}

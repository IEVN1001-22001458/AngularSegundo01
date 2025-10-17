import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalculoZodiaco } from './zodiaco'; 

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacoComponent {
  formulario!: FormGroup;
  objCalculo = new CalculoZodiaco();

  mostrarResultados = false;
  nombreCompleto: string = '';
  edad: number = 0;
  nombreSigno: string = '';
  fotoSigno: string = '';

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apaterno: new FormControl(''),
      amaterno: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      ano: new FormControl(''),
      sexo: new FormControl('')
    });
  }

  imprimirDatos(): void {
    this.objCalculo.nombre = this.formulario.value.nombre;
    this.objCalculo.apaterno = this.formulario.value.apaterno;
    this.objCalculo.amaterno = this.formulario.value.amaterno;
    this.objCalculo.ano = Number(this.formulario.value.ano); 
    this.objCalculo.dia = Number(this.formulario.value.dia);
    this.objCalculo.mes = Number(this.formulario.value.mes);
    this.objCalculo.sexo = this.formulario.value.sexo;

    this.objCalculo.procesarDatos();

    this.nombreCompleto = this.objCalculo.nombreCompleto;
    this.edad = this.objCalculo.edad;
    this.nombreSigno = this.objCalculo.nombreSigno;  
    this.fotoSigno = this.objCalculo.imagenSigno;  
    
    this.mostrarResultados = true;
  }
}

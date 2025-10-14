export class Multiplicacion {
  public numeroA: number = 0;
  public numeroB: number = 0;

  public calcularConSumas(): number {
    let resultado = 0;

    for (let i = 0; i < this.numeroA; i++) {
      resultado = resultado + this.numeroB;
    }
    return resultado;
  }
}


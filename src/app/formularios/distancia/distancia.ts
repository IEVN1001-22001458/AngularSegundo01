export class CalculoDistancia {
  public x1: number = 0;
  public y1: number = 0;
  public x2: number = 0;
  public y2: number = 0;
  public resultado: number = 0;

  public calcular(): void {
    let dX = this.x2 - this.x1;
    let dY = this.y2 - this.y1;

    let sumaDeCuadrados = (dX * dX) + (dY * dY);
    
    this.resultado = Math.sqrt(sumaDeCuadrados);
  }
}


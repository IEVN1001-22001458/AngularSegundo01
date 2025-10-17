export class CalculoZodiaco {
  public nombre: string = '';
  public apaterno: string = '';
  public amaterno: string = '';
  public ano: number = 0;
  public dia: number = 0;
  public mes: number = 0;
  public sexo: string = '';

  public nombreCompleto: string = '';
  public edad: number = 0;
  public nombreSigno: string = '';
  public imagenSigno: string = '';
 
  public procesarDatos(): void {
    this.nombreCompleto = `${this.nombre} ${this.apaterno} ${this.amaterno}`;

    this.edad = 2025 - this.ano;

    let zodiaco = this.ano % 12;
    switch (zodiaco) {
      case 0:
        this.nombreSigno = 'Mono';
        this.imagenSigno = 'https://cdn.pixabay.com/photo/2023/01/22/16/40/monkey-7736916_1280.png'
        break;
      case 1:
        this.nombreSigno = 'Gallo';
        this.imagenSigno = 'https://cdn.pixabay.com/photo/2024/01/31/15/55/chicken-8544360_1280.jpg'
        break;
      case 2:
        this.nombreSigno = 'Perro';
        this.imagenSigno = 'https://cdn.pixabay.com/photo/2023/10/12/20/16/autumncontest-8311751_1280.jpg'
        break;
      case 3:
        this.nombreSigno = 'Cerdo';
        this.imagenSigno = 'https://cdn.pixabay.com/photo/2019/08/19/20/36/pig-4417320_1280.jpg'
        break;
      case 4:
        this.nombreSigno = 'Rata';
        this.imagenSigno = 'https://cdn.pixabay.com/photo/2013/07/12/17/39/rat-152162_1280.png'
        break;
      case 5:
        this.nombreSigno = 'Buey';
        this.imagenSigno = 'https://cdn.pixabay.com/photo/2014/03/24/17/16/bull-295247_960_720.png'
        break;
      case 6:
        this.nombreSigno = 'Tigre';
        this.imagenSigno = 'https://cdn.pixabay.com/photo/2022/01/06/07/16/tiger-6918798_1280.png'
        break;
      case 7:
        this.nombreSigno = 'Conejo';
        this.imagenSigno = 'https://cdn.pixabay.com/photo/2018/01/10/23/53/rabbit-3075088_1280.png'
        break;
      case 8:
        this.nombreSigno = 'Dragón';
        this.imagenSigno = 'https://cdn.pixabay.com/photo/2023/09/20/01/17/dragon-8263685_1280.png'
        break;
      case 9:
        this.nombreSigno = 'Serpiente';
        this.imagenSigno = 'https://cdn.pixabay.com/photo/2016/03/31/19/29/animals-1295060_1280.png'
        break;
      case 10:
        this.nombreSigno = 'Caballo';
        this.imagenSigno = 'https://cdn.pixabay.com/photo/2012/05/07/13/01/horse-48394_1280.png'
        break;
      case 11:
        this.nombreSigno = 'Cabra';
        this.imagenSigno = 'https://cdn.pixabay.com/photo/2024/01/27/00/46/capra-8535002_1280.jpg'
        break;
    }
  }
}

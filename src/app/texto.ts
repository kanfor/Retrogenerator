//El objeto para crear textos.
export class ObjetoTexto {
  texto: string;
  size: number;
  new_size: string;
  constructor(texto: string, size: number, mobile: boolean) {
    this.texto = texto;
    this.size = size;
    if (mobile) {
      this.new_size = this.size + "vw";
    } else {
      this.new_size = this.size + "em";
    }
  }
}



//El objeto para crear textos.
export class ObjetoTexto {
  texto: string;
  size: number;
  new_size: string;
  constructor(texto: string, size: number) {
    this.texto = texto;
    this.size = size;
    this.new_size = this.size + "em";
  }
}



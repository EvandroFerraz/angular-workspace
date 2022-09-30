import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css'],
})
export class ClienteInserirComponent {
  @Output() clienteAdicionado = new EventEmitter();

  nome = "";
  fone = "";
  email = "";

  onAdicionarCliente() {
    const cliente = {
      nome: this.nome,
      fone: this.fone,
      email: this.email
    }
    this.clienteAdicionado.emit(cliente);
  }
}

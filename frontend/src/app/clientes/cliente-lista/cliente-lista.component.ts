import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  clientes = [{
    nome: "José",
    fone: "123141123",
    email: "jose@jose.com"
  },
  {
    nome: "Maria",
    fone: "172673131",
    email: "maria@maria.com"
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

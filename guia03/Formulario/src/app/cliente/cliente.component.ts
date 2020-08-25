import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  nacionalidad = ['', 'El Salvador', 'Mexico', 'Rusia', 'Mongolia'];
  cliente = new Cliente(1, '', '', 23);
  enviar = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.enviar = true;
  }

}

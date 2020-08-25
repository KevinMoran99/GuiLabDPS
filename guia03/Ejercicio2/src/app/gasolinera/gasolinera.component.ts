import { Component, OnInit } from '@angular/core';
import { Tipo } from '../tipo';
import { Venta } from '../venta';

@Component({
  selector: 'app-gasolinera',
  templateUrl: './gasolinera.component.html',
  styleUrls: ['./gasolinera.component.css']
})
export class GasolineraComponent implements OnInit {

  tiposGas = [
    new Tipo('Regular', 4.05),
    new Tipo('Especial',4.25),
    new Tipo('Diesel',  3.96)
  ];

  venta = new Venta(0.05, this.tiposGas[0]);

  constructor() { }

  ngOnInit(): void {
  }

}

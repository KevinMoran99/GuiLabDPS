import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro = [];
  valid:number = 1;
  info:any;
  sueldo:number;
  isss:number;
  renta:number;
  afp:number;
  contador:number;
  
  constructor() { }

  ngOnInit(): void {
    this.sueldo = 0;
    this.isss = 0.073;
    this.renta = 0.11;
    this.afp = 0.051;
    this.contador=0;
  }

  calcular(){
    if(this.sueldo>0){
      this.valid = 1;
      let descuentoIsss = this.sueldo*this.isss;
      let descuentoRenta = this.sueldo*this.renta;
      let descuentoAfp = this.sueldo*this.afp;
      let salarioFinal=this.sueldo-descuentoIsss-descuentoAfp-descuentoRenta; 
      
  
      this.info={"sueldo":salarioFinal.toFixed(2),"isss":descuentoIsss.toFixed(2),"renta":descuentoRenta.toFixed(2), "afp":descuentoAfp.toFixed(2)};
      this.registro.push(this.info);
      this.contador++;
    }else{
      this.valid=0;
    }
  }

}

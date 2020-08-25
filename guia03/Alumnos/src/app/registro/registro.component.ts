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
  alumno:any;
  nombre:string;
  mayor:string;
  edad:number;
  contador:number;
  constructor() { }

  ngOnInit(): void {
    this.edad=0;
    this.nombre="";
    this.contador=0;
  }

  ingresar(){
    if(this.edad>0 && this.edad<18){
      this.mayor ="No";
    }else{
      this.mayor="Si";
    }

    this.alumno={"nombre":this.nombre,"edad":this.edad,"mayor":this.mayor};
    this.registro.push(this.alumno);
    this.contador++;
  }

}

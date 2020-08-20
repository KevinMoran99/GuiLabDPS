import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {

  unidades: string[];
  opcionSeleccionado: string;
  valorcm:number;
  valorConversion:number;
  constructor() { }

  ngOnInit(): void {
    this.unidades=["Pulgada","Metro","Kilometro"];
    this.opcionSeleccionado="Selecciona";
    this.valorcm=0;
    this.valorConversion=0;
  }

  capturar(){
    switch(this.opcionSeleccionado){
      case 'Pulgada':
        this.valorConversion = this.valorcm*0.39370;
        break;
      case 'Metro':
        this.valorConversion = this.valorcm/100;
        break;
      case 'Kilometro':
        this.valorConversion = this.valorcm/100000;
        break;
    }
  }

}

import { Component } from '@angular/core';
import { ArticulosService } from './articulos.service';
import { HttpClient } from '@angular/common/http';
import { Article } from './models/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngularPhp';

  articulos = null;

  art = new Article();

  constructor(private articulosServicio: ArticulosService) { }

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.articulosServicio.recuperarTodos().subscribe(result => this.articulos = result);
  }

  alta() {
    this.articulosServicio.alta(this.art).subscribe(datos => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
        this.art = new Article();
      }
    });
  }

  baja(codigo) {
    if (confirm('¿Está seguro de eliminar el Registro?')) {
      this.articulosServicio.baja(codigo).subscribe(datos => {
        if (datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.recuperarTodos();
        }
      });
    }
  }

  modificacion() {
    this.articulosServicio.modificacion(this.art).subscribe(datos => {
      if(datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
        this.art = new Article();
      }
    });
  }

  seleccionar(codigo) {
    this.articulosServicio.seleccionar(codigo).subscribe(result => this.art = result[0]);
  }

  hayRegistros() {
    return this.articulos !== null;
  }
}

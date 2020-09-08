import { Component } from '@angular/core';
import { Alumno } from './models/alumno'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudAngular';

  alumnoArray: Alumno[] = [
    {id:1, name: "Alex", lastname:"Campos",age:33, address: "Su casita", phone:"7777-7777",email:"Correo@gmail.com"},
    {id:2, name: "Maria", lastname:"Lopez",age:20,address: "Su casita2", phone:"7878-7878",email:"Correo@gmail.com"},
    {id:3, name: "Juan", lastname:"Castro",age:25,address: "Su casita3", phone:"7676-7676",email:"Correo@gmail.com"}
  ]

  selectedAlumno: Alumno = {id:0, name:'',lastname:'',age:0, address:'', phone: '', email: ''};

  openForEdit(alumno: Alumno): void{
    this.selectedAlumno = alumno;
  }

  addOrEdit():void{
    if(this.selectedAlumno.id ===0){
      this.selectedAlumno.id = this.alumnoArray.length+1;
      this.alumnoArray.push(this.selectedAlumno);
    }
    this.selectedAlumno = {id:0, name:'',lastname:'',age:0, address:'', phone: '', email: ''};
  }

  delete():void{
    if(confirm("Esta seguro de eliminar el registro?")){
      this.alumnoArray = this.alumnoArray.filter(x=> x != this.selectedAlumno);
      this.selectedAlumno = {id:0, name:'',lastname:'',age:0, address:'', phone: '', email: ''};
    }
  }

}

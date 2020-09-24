import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/student';
import { AlumnoService } from '../../services/student.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
//Service
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  title = 'CrudAngular';
  
  alumnoArray: Alumno[];
  constructor(public authService: UserService, public alumnoService: AlumnoService) { }

  ngOnInit() {
    this.resetForm();
    return this.alumnoService.getAlumnos().snapshotChanges().subscribe(item => {
      this.alumnoArray = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.alumnoArray.push(x as Alumno);
      });
    });
  }

  onSubmit(alumnoForm: NgForm) {
    if (alumnoForm.value.$key == null) {
      this.alumnoService.insertAlumno(alumnoForm.value);
    }
    else {
      this.alumnoService.updateAlumno(alumnoForm.value);
    }

    Swal.fire('Operación Exitosa', 'Información Enviada', 'success');
    this.resetForm(alumnoForm);
  }

  onEdit(alumno: Alumno) {
    this.alumnoService.selectedAlumno = Object.assign({}, alumno);
  }

  onDelete($key: string) {
    Swal.fire({
      title: '¿Desea eliminar este registro?',
      text: 'No podrá recuperar este registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.alumnoService.deleteAlumno($key);
        this.resetForm();
        Swal.fire(
          'Operación Exitosa',
          'Registro Eliminado',
          'success'
        );
      } 
    });
  }

  resetForm(alumnoForm?: NgForm) {
    if (alumnoForm != null) {
      alumnoForm.reset();
    }
    this.alumnoService.selectedAlumno = new Alumno();
  }

  //selectedAlumno: Alumno = {id:0, name:'',lastname:'',age:0, address:'', phone: '', email: ''};

  /*openForEdit(alumno: Alumno): void{
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
  }*/

}

import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

// Modelo
import { Alumno } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  alumnoList: AngularFireList<any>;

  selectedAlumno: Alumno = new Alumno();

  constructor(private firebase: AngularFireDatabase) { }

  getAlumnos() {
    return this.alumnoList = this.firebase.list('alumnos');
  }

  insertAlumno(alumno: Alumno) {
    this.alumnoList.push({
      name: alumno.name,
      lastname: alumno.lastname,
      age: alumno.age,
      address: alumno.address,
      phone: alumno.phone,
      email: alumno.email
    });
  }

  updateAlumno(alumno: Alumno) {
    this.alumnoList.update(alumno.$key, {
      name: alumno.name,
      lastname: alumno.lastname,
      age: alumno.age,
      address: alumno.address,
      phone: alumno.phone,
      email: alumno.email
    });
  }

  deleteAlumno($key: string) {
    this.alumnoList.remove($key)
  }
}

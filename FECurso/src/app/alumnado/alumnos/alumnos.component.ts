import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnInit{
listaAlumnos:any [] = [];
form: FormGroup;
accion = 'Agregar';
id: number | undefined;
  constructor(private _alumnoService: AlumnoService, private toastr:ToastrService, private fb:FormBuilder){
    this.form = this.fb.group({
      nombre: [''],
      ciudad: [''],
      edad: [''],
      sexo: ['']
    });
  }

  ngOnInit() {
    this.getAlumnos();
  }

  getAlumnos(){
    this._alumnoService.getListAlumnos().subscribe(data=>{
      console.log(data);
      this.listaAlumnos = data;
    })
  }

  eliminarAlumno(id:number){
    this._alumnoService.deleteAlumno(id).subscribe(data =>{
      this.toastr.error('El alumno fue eliminado con éxito.','Alumno eliminado');
      this.getAlumnos();
    })
  }

  editarAlumno(alumno:any){
    this.accion = "Editar";
    this.id = alumno.id;
    this.form.patchValue({
      nombre: alumno.nombre,
      ciudad: alumno.ciudad,
      edad: alumno.edad,
      sexo: alumno.sexo
    })
  }

  guardarAlumno(){
    const alumno:any = {
      nombre: this.form.get('nombre')?.value,
      ciudad: this.form.get('ciudad')?.value,
      edad: this.form.get('edad')?.value,
      sexo: this.form.get('sexo')?.value
    }

    if(this.id == undefined){
      this._alumnoService.saveAlumno(alumno).subscribe(data=>{
        this.toastr.success('El alumno fue registrado con éxito.','Alumno registrado');
        this.getAlumnos();
        this.form.reset();
      })
    }
    else{
      alumno.id = this.id;
      this._alumnoService.updateAlumno(this.id,alumno).subscribe(data=>{
        this.form.reset();
        this.accion = "Agregar";
        this.id = undefined;
        this.toastr.info("El alumno fue actualizado con éxito.","Alumno editado");
        this.getAlumnos();
      })
    }
  }

}

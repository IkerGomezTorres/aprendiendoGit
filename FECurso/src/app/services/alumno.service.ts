import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private myAppURL = "http://localhost:5147/"
  private myApiURL = "api/alumno/"

  constructor(private http:HttpClient) { }

  getListAlumnos(): Observable<any>{
    return this.http.get(this.myAppURL + this.myApiURL);
  }

  deleteAlumno(id:number): Observable<any>{
    return this.http.delete(this.myAppURL + this.myApiURL + id)
  }

  saveAlumno(alumno:any): Observable<any>{
    return this.http.post(this.myAppURL + this.myApiURL,alumno);
  }

  updateAlumno(id:number, alumno:any): Observable<any>{
    return this.http.put(this.myAppURL + this.myApiURL + id, alumno);
  }

}

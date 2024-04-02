import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AlumnosComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,ToastrModule
  ],
  exports:[
    AlumnosComponent
  ]
})
export class AlumnadoModule { }

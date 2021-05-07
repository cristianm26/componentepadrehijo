import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  listEmpleados : Empleado[] = [
    { legajo: 1, nombre: 'Cristian', apellido:'Muñoz', sexo:'Masculino', salario: 2500},
    { legajo: 2, nombre: 'Paola', apellido:'Muñoz', sexo:'Femenino', salario: 2500},
    { legajo: 3, nombre: 'Dario', apellido:'Muñoz', sexo:'Masculino', salario: 2500},
    { legajo: 4, nombre: 'Hugo', apellido:'Muñoz', sexo:'Masculino', salario: 2500},
    { legajo: 5, nombre: 'Nathaly', apellido:'Muñoz', sexo:'Femenino', salario: 2500},
  ]
  radioButonSeleccionado= 'Todos'
  constructor() { }

  ngOnInit(): void {
  }
  obtenerTotalEmpleados(): number{
      return this.listEmpleados.length 
  }
  obtenerTotalFemeninos():number{
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
  }
  obtenerTotalMasculinos():number{
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
  }
  empleadoCountRadioChange(radioButtonSel: string):void{
      this.radioButonSeleccionado = radioButtonSel
  }
}

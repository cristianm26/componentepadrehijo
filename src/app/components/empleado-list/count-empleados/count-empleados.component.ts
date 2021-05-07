import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {
  @Input() todos: number;
  @Input() masculino: number;
  @Input() femenino: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();
  radioButonSeleccionado= 'Todos'
  constructor() { }

  ngOnInit(): void {
  }
  radioChange(): void{
    this.countRadioButtonChange.emit(this.radioButonSeleccionado)
  }
}

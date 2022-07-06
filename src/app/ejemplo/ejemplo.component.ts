import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {
  hola = 'hola mundo!!!';
  @Input()  nombre: any;
  @Input()  apellido: String = 'Davila'; /* unicamente para traer props, son valores que se pasan en una etiqueta */
  status: boolean = true;
  /* declaracion de arreglo e inicializacion */
  data: string[] = [
    'Hola',
    'Mundo',
    'Hola mundo',
    'papa',
    'perro',
    'coca',
    'nene',
    'loco',
    'meme'
  ];
 json={
  data:[{nombre: 'kevin'},{nombre: 'perro'},{nombre: 'coca'},{nombre: 'nene'},{nombre: 'loco'},{nombre: 'loco'}]
};
  constructor() { }

  ngOnInit(): void {
  }

  prueba(){
    console.log('prueba');
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarea-tdd';
  
  calcularFactorial(numero:number):number{
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * this.calcularFactorial(numero - 1);
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.css']
})
export class ChairComponent implements OnInit {

  constructor() { 
  //   const numero:any = [];
  //   for (let i = 1; i <= 50; i++) {
  //     numero.push(i);
  // }
  // console.log(numero);


  }
  
  sillas1: any= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]

  sillas2:any = [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
  saludo:any= console.log("Hola");
  
  ngOnInit(): void {
  }

/*   chairs:any = numeros
 */


  
}


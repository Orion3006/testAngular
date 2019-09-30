import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
nombre:string ="Fran Perez";
imagen:string="assets/images/pintura.jpg";
contador:number=0;
persona:Persona;
  constructor() { }

  ngOnInit() {
    this.persona=new Persona("Fran Perez",25,"Mi direccion donde trabajo",false,"");
  }
incrementar(){
this.contador++;
}
decrementar(){
  this.contador--;
  }
}

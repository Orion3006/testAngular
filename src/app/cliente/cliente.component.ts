import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
listClientes:Persona[]=[];
visible:boolean=false;
itemSelected:Persona;
listCadena:string[]=["Blanco","Gris","Verde","Azul"];
seleccion:string;
  constructor() { }

  ngOnInit() {
    this.listClientes.push(new Persona("Fran Perez",25,"Mi direccion donde trabajo",true,"Java"));
    this.listClientes.push(new Persona("Krystell Perez",25,"Direccion de House",false,"C#"));
    this.listClientes.push(new Persona("Britany Arias",25,"Direccion de Casa",true,"Python"));
    this.visible=true;
  }
  mostrar(){
    this.visible=true;
  }
  ocultar(){
    this.visible=false;
  }
  mostrarSeleccion(itemPersona:Persona):void{
 this.itemSelected= itemPersona;
  }
}

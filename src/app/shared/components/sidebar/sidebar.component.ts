import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent implements OnInit {

   // Creamos la variable a enviar al padre
   @Output() pageTitle: EventEmitter<string>;

   constructor() {

     // Inicializamos la emicion de eventos
     this.pageTitle = new EventEmitter();
   }

    ngOnInit(): void {
      this.emitirPageTitle("Buscar por Capital");
    }

   emitirPageTitle(pageTitle:string):void {
    // Usando la variable emitimos el valor que queremos enviar
    this.pageTitle.emit(pageTitle);
  }
}

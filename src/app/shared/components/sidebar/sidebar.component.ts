import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {

   // Creamos la variable a enviar al padre
   @Output() pageTitle: EventEmitter<string>;

   constructor( ) {

     // Inicializamos la emicion de eventos
     this.pageTitle = new EventEmitter();
   }

   emitirPageTitle(pageTitle:string):void {
    // Usando la variable emitimos el valor que queremos enviar
    this.pageTitle.emit(pageTitle);
  }

  onRouterLinkActive(active: boolean, pageTitle: string) {
    if (active) {
      this.emitirPageTitle(pageTitle);
    }
  }
}

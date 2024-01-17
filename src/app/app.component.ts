import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myPageTitle: string = '';
  title = 'countryApp';

  recibirPageTitle( pageTitle:string ):void
  {
    this.myPageTitle = pageTitle;
  }
}

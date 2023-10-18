import { Component } from '@angular/core';

@Component({
  selector: 'kito-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <h1>
      Welcome to {{title}}!  <!--interpolation-->
    </h1>

    <hr>
    <h4>Interpolation</h4>
    <h5>{{true ? 1 + 1 + 1 : "0"}}</h5>

    <hr>
    <h4>Event mouse and keyboard</h4>
    <button (click)="clickHandler($event)">Click me</button>
    <hr>
    <input type="text" (keydown)="inputHandler($event)">
    <hr>

    <input type="text" (keydown.enter)="inputHandler($event)">
    <hr>

    <h4>Directives</h4>
    <button (click)="visibleList=!visibleList">invert</button>
    <button (click)="toggleList()">toggle</button>
    <h4 *ngIf="visibleList"> Hello World</h4>
    <!--property binding-->
    <li
      [hidden]="!visibleList"
      *ngFor="let user of users"
    >{{user}}
    </li>
    <hr>

    <h4>Attributes and Brackets</h4>

    <div>
      <button [disabled]="imageUrl" (click)="loadUrl()">load</button> <!--disabled directives-->
      <button [disabled]="!imageUrl" (click)="unloadUrl()">unload</button>
    </div>
    <img *ngIf="imageUrl" [src]="imageUrl" alt="image">


    <hr>

    <h4>Router Outlet</h4>

    <hr>

    <h4>Router Outlet</h4>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'angularFundamentals-demo'; // interpolation

  // event handler
  clickHandler(event: MouseEvent): void {
    console.log(event);
  }

  // directives
  visibleList = true
  users = ['fabio', 'lorenzo', 'Simone']
  inputHandler(event: Event): void {
    // const target: HTMLInputElement = event.target as HTMLInputElement;
    const target: HTMLInputElement = <HTMLInputElement>event.target; // using type assertion and generics
    console.log(target.value);
  }
  toggleList() {
    this.visibleList = !this.visibleList
  }

  // attribute and brackets
  imageUrl: string;
  loadUrl() {
    this.imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  }
  unloadUrl() {
    this.imageUrl = null;
  }


}

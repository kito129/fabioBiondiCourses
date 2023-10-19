import { Component } from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'kito-root',
  template: `
	  <!--The content below is only a placeholder and can be replaced.-->
	  <h1>
		  Welcome to {{title}}!  <!--interpolation-->
	  </h1>

	  <hr>

	  <h2>Interpolation</h2>
	  <h5>{{true ? 1 + 1 + 1 : "0"}}</h5>

	  <hr>

	  <h2>Event mouse and keyboard</h2>

	  <button (click)="clickHandler($event)">Click me</button>
	  <hr>
	  <input type="text" (keydown)="inputHandler($event)">
	  <hr>

	  <input type="text" (keydown.enter)="inputHandler($event)">
	  <hr>

	  <h2>Directives</h2>

	  <button (click)="visibleList=!visibleList">invert</button>
	  <button (click)="toggleList()">toggle</button>
	  <h4 *ngIf="visibleList"> Hello World</h4>
	  <!--property binding-->
	  <li
		  [hidden]="!visibleList"
		  *ngFor="let user of usersString"
	  >{{user}}
	  </li>
	  <hr>

	  <h2>Attributes and Brackets</h2>

	  <div>
		  <button [disabled]="imageUrl" (click)="loadUrl()">load</button> <!--disabled directives-->
		  <button [disabled]="!imageUrl" (click)="unloadUrl()">unload</button>
	  </div>
	  <img *ngIf="imageUrl" [src]="imageUrl" alt="image">


	  <hr>

	  <h2>Components</h2>

	  <kito-demo></kito-demo>
	  <kito-demo></kito-demo>
	  <kito-demo></kito-demo>

	  <hr>

	  <h2>Pipe</h2>

	  <h5>{{today}}</h5>
	  <h5>{{today | date: 'dd MMMM YYYY'}}</h5>
	  <h5>{{today | date: 'short'}}</h5>
	  <h5>{{yourMoney | currency}}</h5>
	  <h5>{{yourBitcoins | number: '2.2-5'}} BTC</h5>
	  <pre>{{yourJSON | json}}</pre>

	  <hr>

	  <h2>Custom Types</h2>

	  <li *ngFor="let user of users">
		  {{user.name}}
	  </li>

	  <p>With optionals proprieties</p>
	  <li *ngFor="let user of users">
		  {{user.address?.city}}
	  </li>

	  <hr>

	  <h2>Lesson 4.01. NgIf and LifeCycle</h2>

	  <kito-correct-demo/>

	  <hr>

	  <h2>Lesson 5. Styling</h2>

	  <kito-styling/>

	  <hr>

		<h2>Lesson 6. Template-driven Form </h2>

		<kito-template-driven-form/>

		<hr>

	  <h2>Router Outlet</h2>
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
	  usersString = ['fabio', 'lorenzo', 'Simone']
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

	// pipe
	today = Date.now();
	yourMoney = 1200;
	yourBitcoins = 0.12343242;
	yourJSON = { id: 1, name: 'Fabio' };

	// custom types
	users: Array<User> = [
		{ id: 1, name: 'Fabio'},
		{ id: 2, name: 'Simone'},
		{ id: 3, name: 'Lorenzo'},
	];

}

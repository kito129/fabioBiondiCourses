import { Component } from '@angular/core';

@Component({
	selector: 'kito-styling',
	template: `
	  <h3>Styling Component</h3>

	  <h1 class="male">Male class</h1>
	  <h1 class="female">Female class</h1>

		<hr>

		<h3> Ngclass </h3>
	  <li *ngFor="let user of users"
		  [ngClass]="getCls(user)"
	  >{{user.name}}</li>

		<hr>


		<h3> Inline Styling </h3>
		<li
			*ngFor="let user of users"
			[style.color]="user.gender === 'M' ? 'white' : null"
			[style.backgroundColor]="user.gender === 'M' ? 'blue' : 'pink'"
			[style.fontSize.px]="user.age"
		>
			{{user.name}}
		</li>

		<hr>
		<h3> ngStyle </h3>

		<li
			*ngFor="let user of users"
			[ngStyle]="getStyle(user)"
		>
			{{user.name}}
		</li>

		<hr>

		<h3> CSS 3rd party - bootstrap and fontAwesome </h3>

		<div class="container d-grid">
			<button class="btn btn-primary">
				<i class="fa fa-bluetooth"></i>
				Connect
			</button>
			<button class="btn btn-secondary">
				<i class="fa fa-cloud"></i>
				Cloud
			</button>

			<div class="card">
				<div class="card-header">TITLE</div>
				<div class="card-body">BODY</div>
			</div>
		</div>

	`,
	styles: [`
		.male { background-color: blue; color: white }
		.female { background-color: pink }
		.big { font-size: 30px }
	`]
})
export class StylingComponent {

	users = [
		{ id: 1, name: 'Fabio', gender: 'M', age: 30 },
		{ id: 2, name: 'Lisa', gender: 'F', age: 20 },
		{ id: 3, name: 'Lorenzo', gender: 'M', age: 10 },
		{ id: 4, name: 'Silvia', gender: 'F', age: 130 }
	];

	// ngClass
	getCls(user) { // move the logic in the component, NOT use ternary operator in the template
		return {
			'big': user.gender === 'M',
			'male': user.gender === 'M'
		}
	}

	// ngStyle
	getStyle(user) {
		return {
			backgroundColor: user.gender === 'M' ? 'black' : 'grey',
			color:user.gender === 'M' ? 'white' : 'black',
			fontSize: `${user.age}px`
		};
	}

}

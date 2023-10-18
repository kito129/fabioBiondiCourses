import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../model/user";

@Component({
  selector: 'kito-correct-demo',
	template: `
		<h4>Correct Demo component - ngIf and NgFor</h4>

		<div *ngIf="!users; else success">Loading...</div>

		<ng-template #success> <!--ng-template-->
			<li *ngFor="let user of users; let i = index; let odd; last as isLast">
				<b>[{{i}}] - {{user.name}} - ({{user.company.name}})</b>
				<button (click)="delete(i)">Delete</button>
				<hr *ngIf="odd">
				<div *ngIf="isLast">END OF LIST</div>
			</li>
		</ng-template>

		<hr>
		<!--ng-template and ngIf-->
		<div *ngIf="users; then thenBlock else elseBlock"></div>
		<ng-template #thenBlock>Content to render when condition is true.</ng-template>
		<ng-template #elseBlock>Content to render when condition is false.</ng-template>

		<hr>

		<h2>NgSwitch</h2>

		<button (click)="goto('one')">one</button>
		<button (click)="goto('two')">two</button>
		<button (click)="goto('three')">three</button> <!--not exist, go to default-->

		<div [ngSwitch]="section">
			<div *ngSwitchCase="'one'">
				Lorem Ipsum...
			</div>
			<div *ngSwitchCase="'two'">
				<input type="text" placeholder="kito">
			</div>
			<div *ngSwitchDefault>
				<p style="color: red">wrong section</p>
			</div>
		</div>
	`,
  styles: [
  ]
})
export class CorrectDemoComponent implements OnInit{
	users: Array<User> = [];

	constructor(private http: HttpClient) { }

	ngOnInit() {
		setTimeout(() => { // wrap the http call in a setTimeout to simulate a delay
			this.http.get<Array<User>>('https://jsonplaceholder.typicode.com/users') // get result is Returns: An Observable of the response body as a JavaScript object.
				.subscribe((res: Array<User>) => this.users = res);
		}, 2000);
	}

	delete(index: number): void { // can also use User and get index with .indexOf()
		this.users.splice(index, 1);
	}

	// ngSwitch

	section = 'one';

	goto(value: string) {
		this.section = value;
	}
}

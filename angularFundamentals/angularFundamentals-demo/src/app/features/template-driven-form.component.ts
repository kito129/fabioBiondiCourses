import { Component } from '@angular/core';
import {User} from "../../model/user";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'kito-template-driven-form',
  template: `
		<h2>Template Driven Form</h2>

		<h3>Input, "template reference variables", keyboard events </h3>

		<!-- #inputName is a template reference variables-->
		<input
			type="text"
			#inputName
			placeholder="Add new name"
			(keyup.enter)="addUser(inputName)"
		>
		<button class="btn btn-success" (click)="addUser(inputName)">➕</button>

		<li *ngFor="let user of users">
			{{user}}
			<button class="btn btn-danger" (click)="deleteUser(user)">❌</button>
		</li>

		<hr>

		<h3> ngModel </h3>

		<p>One way biding</p>
		<input
			type="text"
			placeholder="Add User name"
			[ngModel]="label"
		>

		<p>Two way biding</p>
		<input
			type="text"
			placeholder="Add User name"
			[(ngModel)]="label"
		>

		<button class="btn btn-primary" (click)="add()">ADD</button>
		<li *ngFor="let user of users">{{user}}</li>

		<h5>Data: </h5>
		<pre>{{label | json}}</pre>
		<small *ngIf="label.length<3" style="color: red"> Too Short</small>

		<hr>

		<h3> ngModel and data model </h3>

		<!--- formVariable is a template reference variable-->
		<form #formVariable="ngForm"
					(submit)="addForm(formVariable)"
		>
			<input
				type="text"
				placeholder="Add User name"
				[ngModel]="user?.name"
				name="label"
			>
			<input
				type="number"
				placeholder="Add User age"
				[ngModel]="user?.age"
				name="age"
			>
			<input
				type="text"
				placeholder="Add Color"
				[ngModel]="user?.color"
				name="color"
			>

			<button class="btn" [ngClass]="getClass(user) ? 'btn-success' : 'btn-warning'" type="submit">{{user ? 'EDIT' : 'ADD'}}</button>
		</form>

		<h5>List of user:</h5>
		<li *ngFor="let user of usersNew"
				(click)="setActive(user)"
				[style.background]="user.color">
			{{user.label}} ({{user.age}})
		</li>

		<h5>Form RAW</h5>
		<pre>
			{{form?.form?.value | json}}
		</pre>

		<hr>

		<h3>Template-Driven Form Validation</h3>
		<form #form2="ngForm" (submit)="addForm(form2)">
			<input
				type="text"
				placeholder="Add User name"
				[ngModel]="user?.label"
				name="label"
				#labelRef="ngModel"
				required
				minlength="3"
				[ngClass]="{'error': labelRef.invalid && form2.dirty}"
			>

			<input
				type="number"
				placeholder="Add User age"
				[ngModel]="user?.age"
				name="age"
				#ageRef="ngModel"
				[ngClass]="{'error': ageRef.invalid && form2.dirty}"
				required
				min="0"
			>

			<button  class="btn btn-success"  type="submit" [disabled]="form2.invalid">
				ADD
			</button>

			<button class="btn btn-secondary" type="reset" [disabled]="!form2.dirty">
				Reset
			</button>

			<pre>

				Form: {{form2.value | json}}

				Changes: {{form2.valueChanges | async | json}}

				Dirty: {{form2.dirty}}
				Error: {{form2.errors | json}}
				Valid: {{form2.valid}}
			</pre>
		</form>

		<h5>Form list: </h5>

		<li *ngFor="let user of usersNew">
			{{user.label}}
		</li>

		<hr>

		<h2>Error handling</h2>

		Template form error:
		<pre>{{labelRef2.errors | json}}</pre>


		<form #form3="ngForm" (submit)="addForm(form3)">
			<input
				type="text"
				placeholder="Add User name"
				[ngModel]="user?.label"
				name="label"
				#labelRef2="ngModel"
				required
				minlength="5"
				[ngClass]="{'error': labelRef2.invalid && form3.dirty}"
			>

			<input
				type="number"
				placeholder="Add User age"
				[ngModel]="user?.age"
				name="age"
				#ageRef2="ngModel"
				[ngClass]="{'error': ageRef2.invalid && form3.dirty}"
				required
			>

			<!--
			<ng-container *ngIf="labelRef2.errors">
				<div *ngIf="labelRef2.errors.required">
				il campo è obbligatorio
				</div>
				<div *ngIf="labelRef2.errors.minlength">
					troppo corto. Mancano
					{{ labelRef2.errors.minlength.requiredLength - labelRef2.errors.minlength.actualLength }}
					caratteri
				</div>
			</ng-container>
			-->

			<button type="submit" [disabled]="form3.invalid">
				ADD
			</button>
		</form>

		<li *ngFor="let user of usersNew">
			{{user.label}}
		</li>

	`,
  styles: [`
		.error {
			background-color: red;
		}
	`,]
})
export class TemplateDrivenFormComponent {
	label: string = 'guest';
	users: string[] = ['Fabio', 'John', 'Doe'];
	form: NgForm = null;

	usersNew: User[] = [];
	user: User | undefined;  // fix for strict mode

	addUser(input: HTMLInputElement) {
		this.users.push(input.value); // using template reference variables inputName
		input.value = ''; // empty the input after keydown.enter
		input.focus(); //
	}

	deleteUser(user: string) {
		this.users = this.users.filter(u => u !== user);
	}

	// ngModel
	add() {
		console.log(this.label);
		// Add to list
		this.users.push(this.label);
		this.label = '';
	}

	// ngModel and data model


	addForm(form: NgForm): void { // input is NgForm type
		this.form = form
		console.log(this.form)
		this.usersNew.push(form.value as User); // casting to user
		form.reset();
	}

	// using ngModel and data model to pre-populate the form for editing purposes
	setActive(user: User): void{
		this.user = user
	}

	getClass(user: User){
		if(user) {
			return !(user.name === this.user.name)
		} else return true
	}


}

import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {UtilityService} from "../services/utility.service";
import {ServerService} from "../services/server.service";
import {User} from "../../model/user";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'kito-demo',
  template: `
    <h4>Demo component</h4>

	<p>services response: {{value}}</p>

	<ul>
		<li *ngFor="let user of users">
			{{user.name}}
		</li>
	</ul>
  `,
  styles: [
  ]
})
export class DemoComponent {
	value = 0
	serverData: Array<User>
	server: ServerService = null
	users: User[] | undefined;

	constructor(http: HttpClient, utility: UtilityService) {
		http.get<User[]>('https://jsonplaceholder.typicode.com/users')
			.subscribe(result => {
				this.users = result;
				// console.log(result)
			});

		this.value = utility.add(1, 2)
	}

}

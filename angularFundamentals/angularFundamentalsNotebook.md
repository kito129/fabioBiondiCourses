# Angular Fundamentals Notebook

## Info

[repo](https://github.com/kito129/fabioBiondiCourses/tree/master/es6TypeScript)

[Video course by Fabio Biondi](https://www.fabiobiondi.dev/video-courses/angular-fundamentals)
- bought on 10/16/2023
- start on 10/17/2023
- start on 


# To-Do List

- [x] Planning
- [x] day1
- [x] day2
- [x] day3
- [ ] day4
- [ ] day5
- [ ] day6
- [ ] day7
- [ ] day8
- [ ] day9
- [ ] day10
- [ ] recapDay


# Angular Fundamentals

## Intro

[repo](https://github.com/kito129/fabioBiondiCourses/tree/master/angularFundamentals/angularFundamentalsCode)

### Lesson 1.01. Content of the course

Angular is a framework for building client applications in HTML and either JavaScript or a language like TypeScript that compiles to JavaScript.

#### Content

![Course](https://i.imgur.com/aDKPalQ.png)

#### 1. Component Based Component

![Component Based Component](https://i.imgur.com/PVYqiW6.png)

#### 2. Component Hierarchy and Data Flow

![Component Hierarchy and Data Flow](https://i.imgur.com/WDHNDtV.png)

#### 3. Real World application design and implementation

#### 4. Multiview application

![Multiview application with routing](https://i.imgur.com/ETJEVag.png)

#### 5. Routing and Module for lazy loading

#### 6. Router: nested group, child and guard

#### 7. Folder and file structure

![Folder and file structure](https://i.imgur.com/kIA8U2P.png)

### Lesson 1.02. Course in details

#### 1. Fundamentals
![Fundamentals](https://i.imgur.com/S6Xgfnr.png)
#### 2. Components
![Components](https://i.imgur.com/EmLKlJM.png)
#### 3. Dependency Injection
![Dependency Injection](https://i.imgur.com/ewjjZpw.png)
#### 4. Modules & Lazy loading
![Modules & Lazy loading](https://i.imgur.com/M7p5FNn.png)
#### 5. Real World Apps
![Real World Apps](https://i.imgur.com/NppCjrW.png)
#### 6. Best Practice
![Best Practice](https://i.imgur.com/xoNDMTL.png)

### Lesson 1.03. Single Page Applications and component-based approach

Divide and Conquer
![Components in a WebApp](https://i.imgur.com/mZNAlF1.png)

![Code](https://i.imgur.com/h4orWt6.png)

Also the main component is a component! We can have a component tree, with a root component and children components.

SubComponent
![SubComponent](https://i.imgur.com/G1m9796.png)

Tree of components
![Tree of components](https://i.imgur.com/8iJUbKy.png)

To implement the MVC pattern and divide the VIEW from MODEL and CONTROL, the Data flow and state management can also done with a State Manager, via Dependency Injection or Redux (standard de facto for state management). => Stateless component

Use of:
- Action
- Reducer
- Selector
Intensive use of immutability pattern

- Red are SMART COMPONENT, contain business logic, they are the parent of the other components.
- Blue are layout component, used to strucutrize the page.
- Grey component are PRESENTATION COMPONENT (Dummy Component), they are used to display data, less info they have, better it is.

Not only components, other features of Angular:

- Modules
- Directives
- Pipes
- Forms
- Router
- Dependency Injection
- XHR
- Security
- i18
- Server Side Rendering SSR
- Mobile and Desktop App
- PWA
- RXJS

Complete App
![Complete App](https://i.imgur.com/kIA8U2P.png)

GOAL: Design and implement a real world application organizing the code in a modular way, using the best practices and the most common design patterns as component-based approach.

### Lesson 1.04. Angular Framework

[Angular Doc](https://angular.io/guide/understanding-angular-overview)

#### Components
[Components Doc](https://angular.io/guide/component-overview)

Components are the main building blocks for Angular applications. Each component consists of:

- An HTML template that declares what renders on the page
- A TypeScript class that defines behavior
- A CSS selector that defines how the component is used in a template
- Optionally, CSS styles applied to the template

```typeScript
@Component({
  selector: 'app-component-overview',
  template: '<h1>Hello World!</h1>',
  styles: ['h1 { font-weight: normal; }']
})
```


#### Event Listener
[Component interaction Doc](https://angular.io/guide/component-interaction)


```typeScript
import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-child',
  template: `
    <h3>{{hero.name}} says:</h3>
    <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
  `
})
export class HeroChildComponent {
  @Input() hero!: Hero;
  @Input('master') masterName = '';
}
```

#### Directives
[Directives Doc](https://angular.io/guide/built-in-directives)

Directives are classes that add additional behavior to elements in your Angular applications. Use Angular's built-in directives to manage forms, lists, styles, and what users see.

Attribute directives listen to and modify the behavior of other HTML elements, attributes, properties, and components.

Many NgModules such as the RouterModule and the FormsModule define their own attribute directives. The most common attribute directives are as follows:

- NgClass	Adds and removes a set of CSS classes.
- NgStyle	Adds and removes a set of HTML styles.
- NgModel	Adds two-way data binding to an HTML form element


#### Pipes
[Pipes Doc](https://angular.io/guide/pipes-overview)

Pipes are simple functions to use in template expressions to accept an input value and return a transformed value. Pipes are useful because you can use them throughout your application, while only declaring each pipe once. For example, you would use a pipe to show a date as April 15, 1988 rather than the raw string format.

##### Built-in pipes
Angular provides built-in pipes for typical data transformations, including transformations for internationalization (i18n), which use locale information to format data. The following are commonly used built-in pipes for data formatting:

- DatePipe: Formats a date value according to locale rules.
- UpperCasePipe: Transforms text to all upper case.
- LowerCasePipe: Transforms text to all lower case.
- CurrencyPipe: Transforms a number to a currency string, formatted according to locale rules.
- DecimalPipe: Transforms a number into a string with a decimal point, formatted according to locale rules.
- PercentPipe: Transforms a number to a percentage string, formatted according to locale rules.

#### Forms
[Forms Doc](https://angular.io/guide/forms-overview)

Choosing an approach
Reactive forms and template-driven forms process and manage form data differently. Each approach offers different advantages.

##### FORMS	DETAILS
Reactive forms	Provide direct, explicit access to the underlying form's object model. Compared to template-driven forms, they are more robust: they're more scalable, reusable, and testable. If forms are a key part of your application, or you're already using reactive patterns for building your application, use reactive forms.
Template-driven forms	Rely on directives in the template to create and manipulate the underlying object model. They are useful for adding a simple form to an app, such as an email list signup form. They're straightforward to add to an app, but they don't scale as well as reactive forms. If you have very basic form requirements and logic that can be managed solely in the template, template-driven forms could be a good fit.

Reactive forms are more scalable than template-driven forms. They provide direct access to the underlying form API, and use synchronous data flow between the view and the data model, which makes creating large-scale forms easier. Reactive forms require less setup for testing, and testing does not require deep understanding of change detection to properly test form updates and validation.

Template-driven forms focus on simple scenarios and are not as reusable. They abstract away the underlying form API, and use asynchronous data flow between the view and the data model. The abstraction of template-driven forms also affects testing. Tests are deeply reliant on manual change detection execution to run properly, and require more setup.

Angular supports two design approaches for interactive forms. You can build forms by using Angular template syntax and directives to write templates with the form-specific directives. This tutorial describes the directives and techniques to use when writing templates. You can also use a reactive or model-driven approach to build forms.

Template-driven forms are suitable for small or simple forms, while reactive forms are more scalable and suitable for complex forms. For a comparison of the two approaches, see Introduction to Forms

Reactive Forms
![Reactive Forms](https://i.imgur.com/dB2zdil.png)



#### Server Side Communication
[http Client Doc](https://angular.io/guide/understanding-communicating-with-http)

Most front-end applications need to communicate with a server over the HTTP protocol, to download or upload data and access other back-end services. Angular provides a client HTTP API for Angular applications, the HttpClient service class in @angular/common/http.

The HttpClient is a simplified API that enables you to make HTTP requests and process responses in your web application. The HttpClient API supports typed request and response objects, JSON request and response bodies, request and response interception, Observable APIs, and streamlined error handling.


#### Dependency Injection
[Dependency Injection Doc](https://angular.io/guide/dependency-injection)

Dependency injection, or DI, is one of the fundamental concepts in Angular. DI is wired into the Angular framework and allows classes with Angular decorators, such as Components, Directives, Pipes, and Injectables, to configure dependencies that they need.

Two main roles exist in the DI system: dependency consumer and dependency provider.

Angular facilitates the interaction between dependency consumers and dependency providers using an abstraction called Injector. When a dependency is requested, the injector checks its registry to see if there is an instance already available there. If not, a new instance is created and stored in the registry. Angular creates an application-wide injector (also known as "root" injector) during the application bootstrap process, as well as any other injectors as needed. In most cases you don't need to manually create injectors, but you should know that there is a layer that connects providers and consumers.

```typeScript

@NgModule({
  declarations: [HeroListComponent]
  providers: [HeroService]
})
class HeroListModule {}

....

@Component({ … })
class HeroListComponent {
  constructor(private service: HeroService) {}
}
```

#### Router
[Router Doc](https://angular.io/guide/router)

In a single-page app, you change what the user sees by showing or hiding portions of the display that correspond to particular components, rather than going out to the server to get a new page. As users perform application tasks, they need to move between the different views that you have defined.

To handle the navigation from one view to the next, you use the Angular Router. The Router enables navigation by interpreting a browser URL as an instruction to change the view.


#### Modules
[Modules Doc](https://angular.io/guide/architecture-modules)

Angular applications are modular and Angular has its own modularity system called NgModules. NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. They can contain components, service providers, and other code files whose scope is defined by the containing NgModule. They can import functionality that is exported from other NgModules, and export selected functionality for use by other NgModules.

Every Angular application has at least one NgModule class, the root module, which is conventionally named AppModule and resides in a file named app.module.ts. You launch your application by bootstrapping the root NgModule.

While a small application might have only one NgModule, most applications have many more feature modules. The root NgModule for an application is so named because it can include child NgModules in a hierarchy of any depth.

```typeScript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```


Module Example

![Module Example](https://angular.io/generated/images/guide/architecture/compilation-context.png)

Module Folders
![Module Folders](https://i.imgur.com/dIatU5N.png)

#### Angular CLI
[Angular CLI Doc](https://angular.io/guide/cli-builder)


## Lesson 2. Installation and Setup


### Lesson 2.01. NodeJS and NPM  and CLI

    nvm ls-remote
    npm install @angular/cli -g


Current Local Developing Environment 


            _                      _                 ____ _     ___
        / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
    / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
    / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
    /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                    |___/
        

    Angular CLI: 16.2.6
    Node: 18.13.0
    Package Manager: npm 8.19.3
    OS: win32 x64

    Angular: 16.2.9
    ... animations, common, compiler, compiler-cli, core, forms
    ... platform-browser, platform-browser-dynamic, router

    Package                         Version
    ---------------------------------------------------------
    @angular-devkit/architect       0.1602.6
    @angular-devkit/build-angular   16.2.6
    @angular-devkit/core            16.2.6
    @angular-devkit/schematics      16.2.6
    @angular/cli                    16.2.6
    @schematics/angular             16.2.6
    rxjs                            7.8.1
    typescript                      5.1.6
    zone.js                         0.13.3

### Lesson 2.03. Boilerplate

![Boilerplate](https://i.imgur.com/civmKOy.png)

angular.json is the main configuration file, it start the app

src/main.ts is the file that start

```typeScript
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```


### Lesson 2.04. AppComponent e AppModule: part 1 - intro

![appRoot](https://i.imgur.com/Ol7C4K4.png)

![componentBased](https://i.imgur.com/SiGKHmB.png)

index.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AngularFundamentals</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root> <!-- appRoot is the selector of appComponent-->
</body>
</html>

```

app.component.ts
```typeScript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularFundamentals';
}

```

### Lesson 2.05. AppComponent e AppModule: part 2 - code

app.module.ts
```typeScript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // import of components
    AppComponent
  ],
  imports: [ // import of modules
    BrowserModule, // angular core features module
    AppRoutingModule // custom module, to manage routing
  ],
  providers: [],
  bootstrap: [AppComponent] // first component at boostrap
})
export class AppModule { }


```

app.component.ts
```typeScript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //html tag name
  // templateUrl: './app.component.html', // html template, for layout in separate file
  // can also use inline template
  template: `
    <div>
      <h1>{{title}}</h1>
      </div>
    `,
  styleUrls: ['./app.component.css'] // cass template, for style in separate file
})
export class AppComponent {
  title = 'angularFundamentals';
}

```
### Lesson 2.06. ng new : parameters
```text
  ng new angularFundamentals-demo --inline-template --inline-style --skip-tests --prefix kito
```

Some options:
```text
--inline-template
--inline-style 
--skip-tests 
--prefix kito // remove possible conflict with third-apps components
```

## Lesson 3. Fundamentals

### Lesson 3.01. Interpolation {{value}}

Use of interpolation {{template tags}} inside HTMl

```typeScript
import { Component } from '@angular/core';
 
@Component({
   selector: 'fb-root',
   template: `
       <h1>{{1+1+1}}</h1>
       <h1>{{label}} dato con variabile</h1>
       <h1>{{gender==='M' ? 'Uomo': 'Donna' }}  operatore ternario</h1>
       `,
   styles: []
})
export class AppComponent {
   label = 'mario rossi'
   gender = 'F'
}
```

```typeScript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-tags',
  template: `
    <h1>{{1+1+1}}</h1>
    <h2>{{yourname}}</h2>
  `
})
export class TemplateTagsComponent  {
  yourname = 'Fabio Biondi';
}
```


### Lesson 3.02. Native events: mouse e keyboard

> UPDATE:

> in the last release of Angular the event emitted by (keyboard.enter) is of type Event instead of KeyboardEvent inserted in the video.

```typeScript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="clickHandler($event)">Click me</button>
    <hr>
    <input type="text" (keydown)="inputHandler($event)">
    <hr>
    <input type="text" (keydown.enter)="inputHandler($event)">
  `
})
export class AppComponent {

  clickHandler(event: MouseEvent) {
    console.log(event);
  }

  inputHandler(event: Event) {
    // const target: HTMLInputElement = event.target as HTMLInputElement;
    const target: HTMLInputElement = <HTMLInputElement>event.target;
    console.log(target.value);
  }
}

```

### Lesson 3.03. Directives

```typeScript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  template: `
    <button (click)="visible = !visible">toggle</button>
    <hr>
    <img
      *ngIf="visible"
      src="https://angular.io/assets/images/logos/angular/angular.png">

    <li 
      [hidden]="!visible" 
      *ngFor="let user of users"
    >{{user}}</li>
  `
})
export class DirectivesComponent {
  visible = true;
  users = ['Fabio', 'Simone', 'Lorenzo'];
}
```


```typeScript
import { Component } from '@angular/core';
 
@Component({
   selector: 'fb-root',
   template: `
      <button (click)="visible=!visible">invert</button>
      <button (click)="toggle()">toggle</button>
      <h1 *ngIf="visible"> Hello World</h1>
      <li
        [hidden]="!visible"
        *ngFor="let user of users"
      >{{user}}</li>
       `,
})
 
 
export class AppComponent {
   visible = true
   users = ['fabio', 'lorenzo', 'Simone']
   toggle() {
       this.visible = !this.visible
   }
}
```


### Lesson 3.04.  Attributes and brackets (brackets)

```typeScript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button [disabled]="imageUrl" (click)="loadUrl()">load</button>
      <button [disabled]="!imageUrl" (click)="unloadUrl()">unload</button>
    </div>
    <img  *ngIf="imageUrl" [src]="imageUrl">
  `
})
export class AppComponent {

  // attribute and brackets
  imageUrl: string;
  loadUrl() {
    this.imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  }
  unloadUrl() {
    this.imageUrl = null;
  }
}
```


### Lesson 3.05.  Components









### Lesson 3.01. Interpolation 

```typeScript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <kito-demo></kito-demo>
    <kito-demo></kito-demo>
  `
})
export class AppComponent { }
```

```typeScript
import { Component } from '@angular/core';

@Component({
  selector: 'kito-demo',
  template: `
    <h4>Demo componente</h4>
  `,
  styles: [
  ]
})
export class DemoComponent {

}

```
```typeScript
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```




### Lesson 3.06. Custom Types
 
```typeScript
export interface User {
	id: number;
	name: string;
	address?: Address
}

export interface Address {
	street: string;
	city: string;
	province?: string;
	zip: string;
}

```
### Lesson 3.07. Introduction to service and DI

```typeScript
// app.component.ts
import { Component } from '@angular/core';
import { Utility } from './services/utility';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello World</h1>
  `
})
export class AppComponent {
  constructor(utils: Utility) {
    const response = utils.add(1, 4)
    console.log(response);
  }
}

```

```typeScript
// services/utility.ts
export class Utility {
  add(a: number, b: number): number {
    return a + b;
  }
}
```


### Lesson 3.08.  Server Comunication

```typeScript
TYPESCRIPT
// app.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  template: `
    <li *ngFor="let user of users">
      {{user.name}}
    </li>
  `
})
export class AppComponent {
  users: User[] | undefined;

  constructor(http: HttpClient) {
    http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(result => {
        this.users = result;
      });
  }
}

```
## Lesson 4. Angular Structural Directives


### Lesson 4.01.  ngIf and options ngIf...else

> STRICT MODE: update snippet

> In the latest releases of Angular (12 onwards) the strict mode option of the TypeScript compiler has been enabled by default.
> This compiler configuration requires that all properties be initialized (so they cannot be undefined, like the examples in the videos).
> For this reason, although I often do not initialize properties in my videos, the code snippets below the videos have instead been updated to meet this requirement.


```typeScript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="!users; else success">Loading...</div>

    <ng-template #success>{{users | json}}</ng-template>
  `,
})
export class AppComponent implements OnInit {

  users: any[] = [] // must initialize in strict mode

  constructor(private http: HttpClient) { 
    setTimeout(() => {
      http.get<any[]>('https://jsonplaceholder.typicode.com/users') // must use any
        .subscribe(res => this.users = res);
    }, 2000);
  }

}
```


It is good practice to leave it to the constructor to only inject classes and initialize properties.

The recommended approach to making a REST call is to make it in the ngOnInit method of the component lifecycle, which is automatically invoked by the framework right after the constructor.

Below you will find this solution but in the next chapters we will discuss it in more detail.


```typeScript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="!users; else success">Loading...</div>

    <ng-template #success>{{users | json}}</ng-template>
  `,
})
export class AppComponent implements OnInit {

  users: any[] = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    setTimeout(() => {
      this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
        .subscribe(res => this.users = res);
    }, 2000);
  }
}
```


Below is an evolution of the exercise from the video in which:

User is used to type the users property;
The ng-template tag contains and displays a list of elements via an ngFor directive (described in later videos)

[ngIf doc](https://angular.io/api/common/NgIf)



```typeScript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="!users; else success">Loading...</div>

    <ng-template #success>
      <li *ngFor="let user of users">
        {{user.name}}
      </li>
    </ng-template>
  `,
})
export class AppComponent implements OnInit {

  users: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
		setTimeout(() => { // wrap the http call in a setTimeout to simulate a delay
			this.http.get<Array<User>>('https://jsonplaceholder.typicode.com/users')
				.subscribe((res: Array<User>) => this.users = res);
		}, 2000);
	}
}
```


### Lesson 4.02. ngFor, collection types and index

```typeScript 
```


### Lesson 4.03. ngFor: index, last and odd

The following exported values can be aliased to local variables:

- $implicit: T: The value of the individual items in the iterable (ngForOf).
- ngForOf: NgIterable<T>: The value of the iterable expression. Useful when the expression is more complex then a property access, for example when using the async pipe (userStreams | async).
- index: number: The index of the current item in the iterable.
- count: number: The length of the iterable.
- first: boolean: True when the item is the first item in the iterable.
- last: boolean: True when the item is the last item in the iterable.
- even: boolean: True when the item has an even index in the iterable.
- odd: boolean: True when the item has an odd index in the iterable.

```html 
<h4>Correct Demo component - ngIf and NgFor</h4>

<div *ngIf="!users; else success">Loading...</div>

<ng-template #success> <!--ng-template-->
	<li *ngFor="let user of users; let i = index; let odd; last as isLast">
		<b>[{{user.id}}] - {{user.name}} - ({{user.company.name}})</b>

		<hr *ngIf="odd">
		<div *ngIf="isLast">END OF LIST</div>
		</li>
</ng-template>

<hr>
<!--ng-template and ngIf-->
<div *ngIf="users; then thenBlock else elseBlock"></div>
<ng-template #thenBlock>Content to render when condition is true.</ng-template>
<ng-template #elseBlock>Content to render when condition is false.</ng-template>
  
```

### Lesson 4.04. ngFor data manipulation

```typeScript 
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  template: `
      <div *ngFor="let user of users">
        {{user.name}}
        <button (click)="delete(user)">delete</button>
      </div>
  `,
})
export class AppComponent {

  users: User[] = []

  constructor(private http: HttpClient) { 
    http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((result: User[]) => this.users = result);
  }
  
  delete(user: User) {
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }
}
```
### Lesson 4.05. ngSWitch

```typeScript 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="goto('one')">one</button>
    <button (click)="goto('two')">two</button>
    <button (click)="goto('blabla')">three</button>

    <div [ngSwitch]="section">
      <div *ngSwitchCase="'one'">
        Lorem Ipsum...
      </div>
      <div *ngSwitchCase="'two'">
        <input type="text" placeholder="yeow">
      </div>
      <div *ngSwitchDefault>
        wrong section
      </div>
    </div>
  `
})
export class AppComponent  {
  section = 'one';

  goto(value: string) {
    this.section = value;
  }
}
```
## Lesson 5. Styling

Styling Approach is component based, CSS is isolated for each component, and not global.

```typeScript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="male">hello world</h1>
  `,
  stylesUrl: ['./app.component.css'] // to use external css file for this component only
})
export class AppComponent {

}
```

To apply globals style use the file src/styles.css

Can also use backticks for inline style


### Lesson 5.01. Styles and Components

```typeScript

@Component({
  selector: 'app-root',
  template: `
    <h1 class="male">hello world</h1>
  `,
  styles: [`
    .male { color: blue }
    .female { color: pink }
  `]
})
export class AppComponent {

}
```

### Lesson 5.02. Inline CSS class

```typeScript
// app.component.ts

@Component({
  selector: 'app-root',
  template: `
    <li
      *ngFor="let user of users"
      [class.male]="user.gender === 'M'"
      [class.female]="user.gender === 'F'"
    >{{user.name}}</li>
  `,
  styles: [`
    .male { background-color: blue; color: white }
    .female { background-color: pink }
  `]
})
export class AppComponent {
  users = [
    { id: 1, name: 'Fabio', gender: 'M' },
    { id: 2, name: 'Lisa', gender: 'F' },
    { id: 3, name: 'Lorenzo', gender: 'M' },
    { id: 4, name: 'Silvia', gender: 'F' }
  ];
}
```


### Lesson 5.03. ngClass

[ngClass doc](https://angular.io/api/common/NgClass)

The CSS classes are updated as follows, depending on the type of the expression evaluation:

- **string** - the CSS classes listed in the string (space delimited) are added,
- **Array** - the CSS classes declared as Array elements are added,
- **Object** - keys are CSS classes that get added when the expression given in the value evaluates to a truthy value, otherwise they are removed.

```html
  <some-element [ngClass]="'first second'">...</some-element>

  <some-element [ngClass]="['first', 'second']">...</some-element>

  <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>

  <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>

  <some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
```


```typeScript
// Versione 2
import { Component } from '@angular/core';

@Component({
	selector: 'kito-styling',
	template: `
	  <h4>Styling Component</h4>

	  <h1 class="male">Male class</h1>
	  <h1 class="female">Female class</h1>

	  <li *ngFor="let user of users"
		  [ngClass]="getCls(user)"
	  >{{user.name}}</li>
	`,
	styles: [`
		.male { background-color: blue; color: white }
		.female { background-color: pink }
	`]
})
export class StylingComponent {

	users = [
		{ id: 1, name: 'Fabio', gender: 'M' },
		{ id: 2, name: 'Lisa', gender: 'F' },
		{ id: 3, name: 'Lorenzo', gender: 'M' },
		{ id: 4, name: 'Silvia', gender: 'F' }
	];

	getCls(user) { // move the logic in the component, NOT use ternary operator in the template
		return {
			'big': user.gender === 'M',
			'male': user.gender === 'M'
		}
	}

}
```

### Lesson 5.04. Inline Styling

- [Component styling best practices](https://angular.io/guide/component-styles#component-styling-best-practices)
- [Template inline styles](https://angular.io/guide/component-styles#template-inline-styles)

```typeScript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <li
      *ngFor="let user of users"
      [style.color]="user.gender === 'M' ? 'white' : null"
      [style.backgroundColor]="user.gender === 'M' ? 'blue' : 'pink'"
      [style.fontSize.px]="user.age"
    >{{user.name}}</li>
  `
})
export class AppComponent {
  users = [
    { id: 1, name: 'Fabio', gender: 'M', age: 30 },
    { id: 2, name: 'Lisa', gender: 'F', age: 20 },
    { id: 3, name: 'Lorenzo', gender: 'M', age: 10 },
    { id: 4, name: 'Silvia', gender: 'F', age: 130 }
  ];
}
```


### Lesson 5.05. ngStyle

```typeScript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <li
      *ngFor="let user of users"
      [ngStyle]="getStyle(user)"
    >{{user.name}}</li>
  `
})
export class AppComponent {
  users = [
    { id: 1, name: 'Fabio', age: 30, gender: 'M' },
    { id: 2, name: 'Lisa', age: 20, gender: 'F' },
    { id: 3, name: 'Lorenzo', age :10, gender: 'M' },
    { id: 4, name: 'Silvia', age: 130, gender: 'F' }
  ];

  getStyle(user) {
    return {
      backgroundColor: user.gender === 'M' ? 'black' : 'grey',
      color:user.gender === 'M' ? 'blue' : 'pink',
      fontSize: `${user.age}px`
    };
  }
}
```


### Lesson 5.06. CSS 3rd party and angular.json


```json
npm install bootstrap font-awesome
```


```typeScript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <button class="btn btn-primary">
        <i class="fa fa-bluetooth"></i>
        CLOSE
      </button>
      
      <div class="card">
        <div class="card-header">TITOLO</div>
        <div class="card-body">BODY</div>
      </div>
    </div>
  `
})
export class AppComponent {

}
```

```json
// angular.json

"styles": [
  "./node_modules/bootstrap/dist/css/bootstrap.min.css",
  "./node_modules/font-awesome/css/font-awesome.min.css",
  "src/styles.css"
],
```

## Lesson 6. Template-driven Form

[Forms Doc](https://angular.io/guide/forms-overview)

> Angular provides two different approaches to handling user input through forms: reactive and template-driven. Both capture user input events from the view, validate the user input, create a form model and data model to update, and provide a way to track changes.


#### Choosing an approach
Reactive forms and template-driven forms process and manage form data differently. Each approach offers different advantages.

A - Reactive forms	Provide direct, explicit access to the underlying form's object model. Compared to template-driven forms, they are more robust: **they're more scalable, reusable, and testable**. If forms are a key part of your application, or you're already using reactive patterns for building your application, use reactive forms.

B - Template-driven forms	Rely on directives in the template to create and manipulate the underlying object model. They are useful for adding a simple form to an app, such as an email list signup form. They're straightforward to add to an app, **but they don't scale as well as reactive forms**. If you have very basic form requirements and logic that can be managed solely in the template, template-driven forms could be a good fit.

#### Template-driven Form
[Template-driven Form Doc](https://angular.io/guide/forms-overview#setup-in-template-driven-forms)


![Template-driven Form](https://angular.io/generated/images/guide/forms-overview/key-diff-td-forms.png)

![Data Flow VIEW -> MODEL](https://angular.io/generated/images/guide/forms-overview/dataflow-td-forms-vtm.png)

![Data Flow MODEL -> VIEW](https://angular.io/generated/images/guide/forms-overview/dataflow-td-forms-mtv.png)


### Lesson 6.01. Input, "template reference variables", keyboard events

```typeScript
import { Component } from '@angular/core';

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
		<button (click)="addUser(inputName)">➕</button>

		<li *ngFor="let user of users">
			{{user}}
			<button (click)="deleteUser(user)">❌</button>
		</li>

		<hr>

		<h3>Input, "template reference variables", keyboard events </h3>
  `,
  styles: [
  ]
})
export class TemplateDrivenFormComponent {
	users: string[] = ['Fabio', 'John', 'Doe'];

	addUser(input: HTMLInputElement) {
		this.users.push(input.value); // using template reference variables inputName
		input.value = '';
		input.focus();
	}

	deleteUser(user: string) {
		this.users = this.users.filter(u => u !== user);
	}

}

```

### Lesson 6.02. ngModel: 1way vs 2 way binding

[ngModel Doc](https://angular.io/api/forms/NgModel)


```typeScript
// NOTA: ricordati di importare FormsModule in AppModule

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input
      type="text"
      placeholder="Add User name"
      [(ngModel)]="label"
    >
    
    <button (click)="add()">ADD</button>
    <li *ngFor="let user of users">{{user}}</li>
  `
})
export class AppComponent {
  label: string = 'guest';
  users: string[] = [];

  add() {
    console.log(this.label);
    // Add to list
    this.users.push(this.label);
    this.label = null;
  }
}
```

### Lesson 6.03. ngForm, ngModel and data model

```typeScript
// model/user.ts
interface User {
  label: string;
  age: string;
}
```

Part 1

```typeScript
import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form #f="ngForm" (submit)="add(f)">
      <input 
        type="text"
        placeholder="Add User name"
        [ngModel]="label"
        name="label"
      >
      <input 
        type="number"
        placeholder="Add User age"
        [ngModel]="age"
        name="age"
      >
      <button type="submit">ADD</button>
    </form>

    <li *ngFor="let user of users">
      {{user.label}} ({{user.age}})
    </li>

  `,
  styles: []
})
export class AppComponent {
  users: User[] = [];

  add(form: NgForm) {
    this.users.push(form.value as User);
  }

}
```

Part 2
```typeScript
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
 
 
interface User {
   label: string;
   age: string;
   color: string;
 }


@Component({
 selector: 'fb-root',
 template: `
   <form #f="ngForm" (submit)="add(f)">
     <input
       type="text"
       placeholder="Add User name"
       [ngModel]="user?.label"
       name="label"
     >
     <input
       type="number"
       placeholder="Add User age"
       [ngModel]="user?.age"
       name="age"
     >
     <input
       type="srting"
       placeholder="Add Color"
       [ngModel]="user?.color"
       name="color"
     >
     <button type="submit">{{user ? 'EDIT': 'ADD'}}</button>
   </form>
 
   <li *ngFor="let user of users" (click)="setActive(user)" [style.background] ="user.color">
     {{user.label}} ({{user.age}})
   </li>
 `
})
export class AppComponent {
 users: User[] = [];
 user: User | undefined;  // fix for strict mode
 
 add(form: NgForm) {
   this.users.push(form.value as User);
 }
 
 setActive(user: User){
     this.user = user
 }
 
}
 
```

### Lesson 6.04. Form Validation

```typeScript
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

 
interface User {
   label: string;
   age: number;
 }


@Component({
  selector: 'app-root',
  template: `
    <form #f="ngForm" (submit)="add(f)">
      <input 
        type="text" 
        placeholder="Add User name"
        [ngModel]="user?.label"
        name="label"
        #labelRef="ngModel"
        required
        minlength="3"
        [ngClass]="{'error': labelRef.invalid && f.dirty}"
      >

      <input
          type="number"
          placeholder="Add User age"
          [ngModel]="user?.age"
          name="age"
          #ageRef="ngModel"
          [ngClass]="{'error': ageRef.invalid && f.dirty}"
          required
      >

      <button type="submit" [disabled]="f.invalid">
        ADD
      </button>
    </form>
    
    <li *ngFor="let user of users">
      {{user.label}}
    </li>
  `,
  styles: [`
    .error { 
        background-color: red;
    }
  `]
})
export class AppComponent {
  user: User | undefined;  // fix for strict mode
  users: User[] = [];

  add(form: NgForm) {
    this.users.push(form.value);
  }
}
```

### Lesson 6.05. Form, validation e error handling


```typeScript
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

 
interface User {
   label: string;
   age: number;
   city: string;
   color?: string;
}


@Component({
  selector: 'app-root',
  template: `
    <div *ngIf=""labelRef.errors?.required>il campo è obbligatorio</div>
    <div *ngIf="labelRef.errors?.minlength">
      troppo corto. Mancano 
      {{ labelRef.errors?.minlength.requiredLength - labelRef.errors?.minlength.actualLength }} 
      caratteri
    </div>
  
    <form #f="ngForm" (submit)="add(f)">
      <input 
        type="text" 
        placeholder="Add User name"
        [ngModel]="user?.label"
        name="label"
        #labelRef="ngModel"
        required
        minlength="5"
        [ngClass]="{'error': labelRef.invalid && f.dirty}"
      >

      <input
          type="number"
          placeholder="Add User age"
          [ngModel]="user?.age"
          name="age"
          #ageRef="ngModel"
          [ngClass]="{'error': ageRef.invalid && f.dirty}"
          required
      >

      <button type="submit" [disabled]="f.invalid">
        ADD
      </button>
    </form>
    
    <li *ngFor="let user of users">
      {{user.label}}
    </li>
  `,
  styles: [`
    .error { 
        background-color: red;
    }
  `]
})
export class AppComponent {
  user: User | undefined; // fix for strict mode
  users: User[] = [];

  add(form: NgForm) {
    this.users.push(form.value);
    form.reset();
  }
}


interface User {
  label: string;
  age: number;
  city: string;
  color?: string;
}
```



## Lesson 7. Custom Components


### Lesson 7.01. Hello Components


```typeScript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-hello></app-hello>
    <app-hello></app-hello>
    <app-hello></app-hello>
  `
})
export class AppComponent {

}
```

```typeScript
// components/hello.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h3>
      Hello Ciccio
    </h3>
  `
})
export class HelloComponent {

}
```

```typeScript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello.component';  // <===

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent      // <===
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Lesson 7.02. Input Properties

```typeScript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-hello name="Ciccio" color="red"></app-hello>
    <app-hello name="Mario"></app-hello>
    <app-hello name="Fabio"></app-hello>
  `
})
export class AppComponent {

}
```

```typeScript
// components/hello.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h3 [style.color]="color">
      Hello {{name}}
    </h3>
  `
})
export class HelloComponent {
  @Input() name: string | undefined; // fix for strict mode
  @Input() color: string = 'blue';
}
```

### Lesson 7.03. Content Projection

```typeScript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mt-3">
      <app-card title="Profile">
        Lorem Ipsum...
      </app-card>   
      
      <app-card title="Form">
        <input type="text">
        <input type="text">
        <input type="text">
      </app-card>
      
      <app-card>
        <div class="row">
          <div class="col">
            <app-card title="1">
              <input type="text">
            </app-card>
          </div>
          <div class="col">
            <app-card title="2">
              bla bla
            </app-card>
          </div>
        </div>
      </app-card>
    </div>
  `
})
export class AppComponent {

}
```

```typeScript
// components/card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card mb-3">
      <div class="card-header">{{title}}</div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class CardComponent {
  @Input() title: string | undefined; // fix for strict mode
}
```

```typeScript
```

### Lesson 7.04. "stateful" Components e Input default value

```typeScript
// card.component.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card mb-3">
      <div class="card-header" (click)="opened = !opened">{{title}}</div>
      <div class="card-body" *ngIf="opened">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class CardComponent {
  @Input() title = 'N/D';
  opened = false;
}
```

### Lesson 7.06. Output event emitter: realizzare un TabBar component riutilizzabile

I mentioned the Redux pattern several times in this video. What is it?

It is a pattern that allows us to manage the application state of an application by separating it clearly from the GUI. Originally created to manage the state of React applications, it has now caught on in the Angular ecosystem as well, first with a porting, Angular Redux, and then with a new library called NGRX.

This topic will not be covered in this course but, if you are curious, I'll leave you with some in-depth links. This topic, however, is not the easiest so I recommend that you read up on it only after you get a little familiar with Angular:

My slides on the topic
- The official Redux site (although focused on React)
- Angular Redux
- NGRX Platform

```typeScript
// app/app.component.ts
import { Component } from '@angular/core';
import { TabbarItem } from './shared/tabbar';

@Component({
  selector: 'app-root',
  template: `
    <app-tabbar
        [items]="users"
        [active]="activeUser"
        (tabClick)="openDetails($event)"
    ></app-tabbar>

    <div class="card" *ngIf="activeUser">
      <div class="card-header">{{activeUser.name}}</div>
      <div class="card-body">
        {{activeUser.desc}}
        <img src="https://maps.googleapis.com/maps/api/staticmap?center={{activeUser.country}}&zoom=5&size=200x200&key=AIzaSyBAyMH-A99yD5fHQPz7uzqk8glNJYGEqus" >
      </div>
    </div>
  `
})
export class AppComponent {
  users: TabbarItem[] = [
    { id: 1, country: 'Italy', name: 'Mario', desc: 'bla bla'},
    { id: 2, country: 'Japan', name: 'Fabio'},
    { id: 3, country: 'Spain', name: 'Ciro'},
  ];

  activeUser: TabbarItem| null = null

  openDetails(user: TabbarItem) {
    this.activeUser = user;
  }
}

```

```typeScript
// app/shared/tabbar.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabbarItem } from './tabbar';

@Component({
  selector: 'app-tabbar',
  template: `
    <ul class="nav nav-tabs">
      <li class="nav-item" 
          *ngFor="let item of items"
          (click)="tabHandler(item)"
      >
        <a class="nav-link"
           [ngClass]="{'active': item.id === active?.id }"
        >{{item.name}}</a>
      </li>
     
    </ul>
  `,
  styles: []
})
export class TabbarComponent {
  @Input() items: TabbarItem[] | null = null
  @Input() active: TabbarItem | null = null
  @Output() tabClick: EventEmitter<TabbarItem> = new EventEmitter();

  tabHandler(item: TabbarItem) {
    this.tabClick.emit(item);
  }
}
```

```typeScript
// app/shared/components/tabbar.ts
export interface TabbarItem {
  id: number;
  name: string;
  country?: string;
  desc?: string;
}
```

### Lesson 7.07. Lifecycle hook: ngOnInit

```typeScript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-meteo city="London"></app-meteo>
  `
})
export class AppComponent {
}

```

```typeScript
// components/meteo.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_TOKEN } from './config';

@Component({
  selector: 'app-meteo',
  template: `
    <h1>{{city}}</h1>
    <div *ngIf="weather">
      <h3>{{weather?.main.temp}}°</h3>
      <h3>{{weather?.main.humidity}}%</h3>
    </div>
    <pre>{{weather | json}}</pre>
    `,
  styles: []
})
export class MeteoComponent implements OnInit {
  @Input() city: string | null = null
  weather: any; // <== Naturalmente potresti creare un custom type per questo oggetto. A te il compito di farlo :P

  constructor(private http: HttpClient) {
    console.log(this.city)
  }

  ngOnInit() {
    console.log(this.city)
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=MILANO&units=metric&APPID=${APP_TOKEN}`)
      .subscribe(res => {
        this.weather = res;
      });
  }

}
```

```typeScript
export const APP_TOKEN = '[YOUR TOKEN HERE]';
```

### Lesson 7.08. Lifecycle Hook: onChange

To carry out this exercise and use the Weather API you need to create a free token from the [Open Weather Map site](https://openweathermap.org/).

```typeScript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-meteo [city]="city"></app-meteo>
    <button (click)="changeCity()">Change City</button>
  `,
})
export class AppComponent {
  city = 'Milano';
  changeCity() {
    this.city = 'NEW YORK';
  }
}
```

```typeScript
// components/meteo.component.ts
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_TOKEN } from './config';

@Component({
  selector: 'app-meteo',
  template: `
    <h1>{{city}}</h1>
    <div *ngIf="weather">
      <h3>{{weather?.main.temp}}°</h3>
      <h3>{{weather?.main.humidity}}%</h3>
    </div>
    `,
  styles: []
})
export class MeteoComponent implements OnChanges {
  @Input() city: string | null = null
  weather: any;

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges) {
    const city = changes['city']

    if (city) {
      this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city.currentValue}&units=metric&APPID=${APP_TOKEN}`)
        .subscribe(res => {
          this.weather = res;
        });
    }
  }
}
```

```typeScript
// components/config.js
export const APP_TOKEN = 'YOUR TOKEN HERE';
```

### Lesson 7.09. ChangeDetectionStrategy, ChangeDetectorRef and Immutable State

TIP - CHANGE DETECTION: WHEN ARE TEMPLATES RECOMPILED?

There are three situations that generate "unchecked" rendering of components:

- User Iterations with mouse and keyboard
- XHR: HTTP calls
- Timers: setInterval and setTimeout

Using the onPush strategy of the ChangeDetectionStrategy and the ChangeDetectorRef service, we can instead control the rendering of each individual component

```typeScript
// app.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <app-meteo [city]="city"></app-meteo>

    <form #f="ngForm" (submit)="changeCity(f)">
      <input type="text" [ngModel]="city.value" name="city">
      <button type="submit">Update</button>
    </form>
  `,
})
export class AppComponent {
  city = { value: 'Milano' };

  changeCity(form: NgForm) {
    
    // Mutate Object: cannot work with onPush Strategy
    // this.city.value = form.value.city;
    
    // Use Immutable Approach instead
    this.city = { value : form.value.city };
  }
}

```

```typeScript
// components/meteo.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_TOKEN } from './config';

@Component({
  selector: 'app-meteo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>{{city.value}}</h1>
    <div *ngIf="weather">
      <h3>{{weather?.main.temp}}°</h3>
      <h3>{{weather?.main.humidity}}%</h3>
      
      <div>{{printMe()}}</div>
    </div>
    `,
  styles: []
})
export class MeteoComponent implements OnChanges {
  @Input() city: any;
  weather: any;

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    const city = changes.city;
    if (city) {
      this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city.currentValue}&units=metric&APPID=${APP_TOKEN}`)
        .subscribe(res => {
          this.weather = res;
          this.cd.markForCheck();
        });
    }
  }

  printMe() {
    console.log('check');
  }
}
```

```typeScript

```

## Lesson 8. BrowserAnimationModule


### Lesson 9.01. Animated Collapsable Panel: trigger, style, state e animate

In order to complete the exercises remember to:

    npm install bootstrap

and to configure the angular.json file in order to load the CSS frameworks globally:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/font-awesome/css/font-awesome.min.css",
  "src/styles.css"
],
```

```typeScript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mt-3">
      <app-card title="FIRST">
        bla bla
      </app-card>

      <app-card title="SECOND">
        Un oggetto nella realtà non inizia istantaneamente il suo 
        movimento e la sua velocità non rimane costante.
        Quando apriamo il cassetto, prima gli imprimiamo un’accelerazione e poi lo facciamo rallentare. Quando qualcosa cade, 
        prima accelera verso il basso, poi rimbalza in alto dopo aver colpito il pavimento.
        Questa pagina ti aiuta ogni volta a scegliere la funzione di 
        interpolazione desiderata.
      </app-card>
    </div>
  `,
  styles: []
})
export class AppComponent {

}
```

```typeScript
// components/card.component.ts
import {Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-card',
  animations: [
    trigger('collapsable', [
      state('opened', style({
        height: '*'
      })),
      state('closed', style({
        height: 0,
        padding: 0
      })),
      transition('opened <=> closed', [
        animate('0.7s cubic-bezier(0.77, 0, 0.175, 1)')
      ])
    ])
  ],
  template: `
    <div class="card bg-dark text-white mb-1">
      <div class="card-header" (click)="toggle()">{{title}}</div>
      <div class="card-body" style="overflow: hidden"
           [@collapsable]="state">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class CardComponent {
  @Input() title!: string;
  state = 'opened';

  toggle() {
    this.state = this.state === 'opened' ? 'closed' : 'opened';
    console.log(this.state)
  }
}
```

```typeScript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Lesson 9.02. Animated TabBar: animations e components lifecycle


```typeScript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mt-3">
      <app-animated-button (click)="active = 'one'" [selected]="active === 'one'">ONE</app-animated-button>
      <app-animated-button (click)="active = 'two'" [selected]="active === 'two'">TWO</app-animated-button>
      <app-animated-button (click)="active = 'three'" [selected]="active === 'three'">THREE</app-animated-button>
    </div>
  `,
  styles: []
})
export class AppComponent {
  active = 'one';
}

```

```typeScript
// components/animated-button.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-animated-button',
  animations: [
    trigger('buttonAnimated', [
      state('selected', style({
        borderColor: 'white',
        backgroundColor: 'orange',
        transform: 'scale(1.3) rotate(-10deg)'
      })),
      state('over', style({
        transform: 'scale(1.3) rotate(20deg)'
      })),
      state('out', style({
        transform: 'scale(1) rotate(0)'
      })),
      transition('out <=> over', [
        // https://easings.net/
        animate('0.5s cubic-bezier(0.645, 0.045, 0.355, 1)')  // cubic
      ]),
      transition('* <=> selected', [
        // https://easings.net/
        animate('0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275)') // back
      ])
    ])
  ],
  template: `
    <button
      class="button"
      [disabled]="selected"
      [@buttonAnimated]="state"
      (mouseover)="state = 'over'"
      (mouseout)="leaveHandler()"
    > <ng-content></ng-content> </button>
  `,
  styleUrls: ['./animated-button.component.css']
})
export class AnimatedButtonComponent implements OnChanges {
  @Input() selected: boolean = false;  // fix for strict mode
  state = 'out';

  ngOnChanges(changes: SimpleChanges) {
    // UPDATE: fix per funzionare nelle ultime versioni di Angular
    this.state = changes['selected'].currentValue ? 'selected' : 'out';
  }

  leaveHandler() {
    // UPDATE: fix per funzionare nelle ultime versioni di Angular
    // impostiamo lo stato ad 'out' al mouseout solo se l'elemento non è selezionato
    if (!this.selected) {
      this.state = 'out'
    }
  }
}
```


### Lesson 9.03. Animated Text: animation events handlers


```typeScript
// app.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-button-demo',
  template: `
    <app-animated-button
      *ngFor="let section of sections"
      (click)="active = section" [selected]="section.id === active.id">
      
      {{section.label}} 
      
    </app-animated-button>
    
    <app-animated-text [text]="active.text"></app-animated-text>
  `,
})
export class AnimatedButtonDemo2Component {
  sections = [
    { id: 1, label: 'FIRST', text: 'Callbacks can serve as a debugging tool, for example in conjunction with console.warn() to view the application\'s progress in a browser\'s Developer JavaScript Console. The following code snippet creates console log output for our original example, a button with the two states of open and closed.'},
    { id: 2, label: 'SECOND', text: 'In the previous section, we saw a simple two-state transition. Now we\'ll create an animation with multiple steps run in sequence using keyframes.'},
    { id: 3, label: 'THIRD', text: 'bla bla 3' },
  ];
  active = this.sections[0];
}
```

```typeScript
// components/animated-text.component.ts
import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger, AnimationEvent} from '@angular/animations';

@Component({
  selector: 'app-animated-text',
  animations: [
    trigger('animatedText', [
      state('show', style({
        opacity: 1,
        marginTop: 0
      })),
      state('hide', style({
        opacity: 0,
        marginTop: '50px'
      })),
      transition('show <=> hide', [
        animate('0.7s cubic-bezier(0.645, 0.045, 0.355, 1)')
      ])
    ])
  ],
  template: `
    <p [@animatedText]="state" (@animatedText.done)="showNext($event)">
      {{textToShow}}
    </p>
  `,
  styles: []
})
export class AnimatedTextComponent implements OnChanges {
  @Input() text: string = ''
  textToShow: string = '';

  state = 'show';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changed')
    if (changes['text'].isFirstChange()) {
      this.textToShow = changes['text'].currentValue;
    } else {
      this.state = 'hide';
    }
  }

  showNext(event: AnimationEvent) {
    console.log(event)
    if (event.toState === 'hide') {
      this.state = 'show';
      this.textToShow = this.text;
    }
  }

}
```

```typeScript
// components/animated-button.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-animated-button',
  animations: [
    trigger('buttonAnimated', [
      state('selected', style({
        borderColor: 'white',
        backgroundColor: 'orange',
        transform: 'scale(1.3) rotate(-10deg)'
      })),
      state('over', style({
        transform: 'scale(1.3) rotate(20deg)'
      })),
      state('out', style({
        transform: 'scale(1) rotate(0)'
      })),
      transition('out <=> over', [
        // https://easings.net/
        animate('0.5s cubic-bezier(0.645, 0.045, 0.355, 1)')  // cubic
      ]),
      transition('* <=> selected', [
        // https://easings.net/
        animate('0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275)') // back
      ])
    ])
  ],
  template: `
    <button
      class="button"
      [disabled]="selected"
      [@buttonAnimated]="state"
      (mouseover)="state = 'over'"
      (mouseout)="leaveHandler()"
    > <ng-content></ng-content> </button>
  `,
  styleUrls: ['./animated-button.component.css']
})
export class AnimatedButtonComponent implements OnChanges {
  @Input() selected: boolean = false;  // fix for strict mode
  state = 'out';

  ngOnChanges(changes: SimpleChanges) {
    // UPDATE: fix per funzionare nelle ultime versioni di Angular
    this.state = changes['selected'].currentValue ? 'selected' : 'out';
  }

  leaveHandler() {
    // UPDATE: fix per funzionare nelle ultime versioni di Angular
    // impostiamo lo stato ad 'out' al mouseout solo se l'elemento non è selezionato
    if (!this.selected) {
      this.state = 'out'
    }
  }
}
```

```typeScript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimatedButtonComponent } from './components/animated-button.component';
import { AnimatedTextComponent } from './components/animated-text.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AnimatedButtonComponent,
    AnimatedTextComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Lesson 10. Multi-view applications con Angular Router

### Lesson 10.01. Angular Router

[Routers Doc](https://angular.io/guide/router)


### Lesson 10.02. Angular Router CLI

```typeScript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}

```

```typeScript

    RouterModule.forRoot([
      { path: 'catalog', component: CatalogComponent},
      { path: 'contacts', component: ContactsComponent },
      { path: '**', redirectTo: 'catalog' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


### Lesson 10.03. Navigation Bar

```typeScript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <hr>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
```

```typeScript
// core/navbar/navbar.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark text-white">
      <a class="navbar-brand">ANGULAR</a>
      <div class="navbar-collapse collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" routerLink="/catalog" routerLinkActive="active">Catalog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/contacts" routerLinkActive="active">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

```typeScript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './shared/card/card.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CatalogComponent,
    ContactsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'catalog', component: CatalogComponent},
      { path: 'contacts', component: ContactsComponent },
      { path: '**', redirectTo: 'catalog' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Lesson 10.04. AngularCLI and AppRoutingModule

```json
ng new my-project --inline-template --inline-style --skip-tests

// Versione abbreviata
ng new my-project -t -s -S

// Con prefisso custom fb invece di 'app'
ng new my-project -t -s -S --prefix fb
```

The parameters used in the CLI, when creating an Angular project, will determine how components will later be created through the use of generators:

    --inline-template: creates components using templates instead of templateUrls
    --inline-style: uses styles instead of stylesUrls
    --skip-tests: no test files (.spec) will be generated
    --prefix xyz: creates components using xyz-component prefix instead of app-component


### Lesson 10.05. Parameters e ActivatedRoute

```typeScript
// features/user-details/user-details.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  template: `
    <div *ngIf="user">
      <h1>{{user.name}}</h1>
      <h2>{{user.email}}</h2>
    </div>
  `,
  styles: []
})
export class UserDetailsComponent {
  user: any; // <== ovviamente questo oggetto potrà (e dovrà) essere tipizzato. Crea un type con interface User { ... } )

  constructor(
    activatedRoute: ActivatedRoute,
    http: HttpClient
  ) {
    const id = +activatedRoute.snapshot.params['id'];
    http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe(res => {
        this.user = res;
      });
  }
}
```

```typeScript
// features/users/users.component.ts
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-users',
  template: `
    <li *ngFor="let user of users" [routerLink]="['/users', user.id]">
      {{user.name}}
    </li>
  `,
  styles: []
})
export class UsersComponent {
  users: any[] = []; // puoi tipizzare questo array con User[] (ma dovrai creare un type User)

  constructor(http: HttpClient) {
    http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => this.users = res);
  }

}
```

```typeScript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button routerLink="users">users</button>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-course-project';
}
```

```typeScript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { UsersComponent } from './features/users/users.component';
import { UserDetailsComponent } from './features/user-details/user-details.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typeScript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './features/users/users.component';
import {UserDetailsComponent} from './features/user-details/user-details.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: '**', redirectTo: 'users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### Lesson 10.06. ActivatedRoute e Router API

```typeScript
// features/user-details/user-details.component.ts
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-details',
  template: `
    <div *ngIf="user">
      <h1>{{user.name}}</h1>
      <h2>{{user.email}}</h2>
    </div>
    <button (click)="gotoNextUser()">Next</button>
  `,
  styles: []
})
export class UserDetailsComponent {
  user: any;  // crea un type User per completare la tipizzazione
  id: number | null = null

  constructor(
    activatedRoute: ActivatedRoute,
    http: HttpClient,
    private router: Router
  ) {
    activatedRoute.params
      .subscribe(params => {
        this.id = +params['id'];
        http.get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
          .subscribe(res => {
            this.user = res;
          });
      });
  }

  gotoNextUser() {
    if (this.id) {
      const nextId = this.id + 1;
      this.router.navigateByUrl(`users/${nextId}`);
    }
  }

}
```

### Lesson 10.07. Router's Events & RxJS operators

```typeScript
// VERSIONE AGGIORNATA PER ANGULAR 11+
// app.component.ts
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `
    <button routerLink="users">users</button>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
   constructor(router: Router) {
    router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe((event) => {
        console.log((event as NavigationEnd).url);
      });
  }
}
```

```typeScript
// VERSIONE ANGULAR 7/8/9/10
// app.component.ts
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
// FIX RXJS 7 (Angular 12/13): rinuovere procedente import in favore di questo:
// import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `
    <button routerLink="users">users</button>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  constructor( router: Router) {
    router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe((event: NavigationEnd) => {
        console.log(event.url);
      });
  }
}
```

## Lesson 11. Server Communication

### Lesson 11.01. mock server: json-server

```typeScript
npm install json-server --save-dev
```
server/db.json:


```json
{
  "devices": [
    {
      "label": "IPhone X",
      "os": "ios",
      "price": 1200,
      "rate": 2,
      "memory": 6000,
      "desc": "This device is too expensive!!!!",
      "id": 1
    },
    {
      "label": "One Plus 5",
      "os": "android",
      "price": 390,
      "rate": 4,
      "memory": 8000,
      "desc": "One Plus 5 is a flagship phone...",
      "id": 2
    }
  ],
  "login": {
    "token": 123456
  }
}
```

package.json:


```json
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "server": "json-server --watch server/db.json"
  },
```

### Lesson 11.02. GET: data load from REST API and custom types


```typeScript
// features/catalog/catalog.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from './model/device';

@Component({
  selector: 'app-catalog',
  template: `
    <li *ngFor="let device of devices">
      {{device.label}} ({{device.price}})
    </li>
  `,
  styles: []
})
export class CatalogComponent implements OnInit {
  devices: Device[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Device[]>('http://localhost:3000/devices')
      .subscribe((result: Device[]) => {
        this.devices = result;
      });
  }

}
```

```typeScript
// features/catalog/model/device.ts
export interface Device {
  label: string;
  os: string;
  price: number;
  rate: number;
  memory: number;
  desc: string;
  id: number;
}
```

```typeScript

```

### Lesson 11.03. DELETE: Delete elements and error handling XHR

```typeScript
// Esempio per Angular 12 e inferiore
// features/catalog/catalog.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from './model/device';

@Component({
  selector: 'app-catalog',
  template: `
    
    <div *ngIf="error" 
        class="alert alert-danger">
      error
      <i class="fa fa-times" (click)="error = null"></i>
    </div>
    
    <li *ngFor="let device of devices">
      {{device.label}} ({{device.price}})
      <button (click)="delete(device)">delete</button>
    </li>
  `,
  styles: []
})
export class CatalogComponent implements OnInit {
  devices: Device[];
  error: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Device[]>('http://localhost:3000/devices')
      .subscribe((result: Device[]) => {
        this.devices = result;
      });
  }

  delete(device: Device) {
    this.http.delete(`http://localhost:3000/devices/${device.id}`)
      .subscribe(
        () => {
          const index = this.devices.findIndex(d => d.id === device.id);
          this.devices.splice(index, 1);
        },
        err => this.error = err
      );


  }

}
```

```typeScript
// model/device.ts
export interface Device {
  label: string;
  os: string;
  price: number;
  rate: number;
  memory: number;
  desc: string;
  id: number;
}
```

```typeScript
// Esempio per Angular 13+
// features/catalog/catalog.component.ts
// Esempio per Angular 13+
// features/catalog/catalog.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from './model/device';

@Component({
  selector: 'app-root',
  template: `

    <div *ngIf="error"
         class="alert alert-danger">
      error
      <i class="fa fa-times" (click)="error = false"></i>
    </div>

    <li *ngFor="let device of devices">
      {{device.label}} ({{device.price}})
      <button (click)="delete(device)">delete</button>
    </li>
  `,
  styles: []
})
export class CatalogComponent implements OnInit {
  devices: Device[] = [];
  error: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Device[]>('http://localhost:3000/devices')
      .subscribe((result: Device[]) => {
        this.devices = result;
      });
  }

  delete(device: Device) {
    this.http.delete(`http://localhost:3000/devices/${device.id}`)
      .subscribe({
        next: () => {
          const index = this.devices.findIndex(d => d.id === device.id);
          this.devices.splice(index, 1);
        },
        error: () => {
          this.error = true;
        }
      });

  }

}
```

### Lesson 11.04. Dynamic styles and best look & feel

```typeScript
// Angular 9 e inferiore (versione originale)
// features/catalog/catalog.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from './model/device';
import { NgForm } from '@angular/forms';

const URL = 'http://localhost:3000';

@Component({
  selector: 'app-catalog',
  template: `
    <div *ngIf="error" 
        class="alert alert-danger">
      error
      <i class="fa fa-times" (click)="error = null"></i>
    </div>

    <li class="list-group-item" *ngFor="let device of devices">
      <i 
        class="fa" 
        [ngClass]="{
          'fa-android': device.os === 'android',
          'fa-apple': device.os === 'ios'
        }"
        [style.color]="device.os === 'android' ? 'green' : 'grey'"
      ></i>
      {{device.label}}
      <span *ngIf="device.memory">({{device.memory / 1000}}Gb)</span>
      
      <div class="pull-right">
        <span
          *ngIf="device.price"  
          [style.color]="device.price > 500 ? 'red' : null">
          € {{device.price}}
        </span>
        <i 
          class="fa fa-trash" 
          (click)="delete(device)"
        ></i>
      </div>
    </li>
  `,
  styles: []
})
export class CatalogComponent implements OnInit {
  devices: Device[];
  error: any;


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Device[]>(`${URL}/devices`)
      .subscribe((result: Device[]) => {
        this.devices = result;
      });
  }

  delete(device: Device) {
    this.http.delete(`${URL}/devices/${device.id}`)
      .subscribe(
        () => {
          const index = this.devices.findIndex(d => d.id === device.id);
          this.devices.splice(index, 1);
        },
        err => this.error = err
      );
  }


}
```

```typeScript
// Angular 13+
// features/catalog/catalog.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from './model/device';

const URL = 'http://localhost:3000';

@Component({
  selector: 'app-catalog',
  template: `
    <div *ngIf="error" class="alert alert-danger">
      error
      <i class="fa fa-times" (click)="error = false"></i>
    </div>

    <ul class="list-group">
      <li class="list-group-item" *ngFor="let device of devices">
        <i
          class="fa"
          [ngClass]="{
            'fa-android': device.os === 'android',
            'fa-apple': device.os === 'ios'
          }"
          [style.color]="device.os === 'android' ? 'green' : 'grey'"
        ></i>
        {{device.label}}
        <span *ngIf="device.memory">({{device.memory / 1000}}Gb)</span>
  
        <div class="pull-right">
          <span
            *ngIf="device.price"
            [style.color]="device.price > 500 ? 'red' : null">
            € {{device.price}}
          </span>
          <i
            class="fa fa-trash"
            (click)="delete(device)"
          ></i>
        </div>
      </li>
    </ul>
  `,
  styles: []
})
export class CatalogComponent implements OnInit {
  devices: Device[] = []
  error: boolean = false;


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Device[]>(`${URL}/devices`)
      .subscribe((result: Device[]) => {
        this.devices = result;
      });
  }

  delete(device: Device) {
    this.http.delete(`${URL}/devices/${device.id}`)
      .subscribe({
        next: () => {
          const index = this.devices.findIndex(d => d.id === device.id);
          this.devices.splice(index, 1);
        },
        error: () => this.error = true
      })
  }


}
```

### Lesson 11.05. POST: Add elements and form validation


```typeScript
// VERSIONE ORIGINAL DEL VIDEO
// features/catalog/catalog.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from './model/device';
import { NgForm } from '@angular/forms';

const URL = 'http://localhost:3000';

@Component({
  selector: 'app-catalog',
  template: `
    <div *ngIf="error" 
        class="alert alert-danger">
      error
      <i class="fa fa-times" (click)="error = null"></i>
    </div>
    
    <form #f="ngForm" (submit)="add(f)">
      <input
          [ngModel]
          name="label"
          type="text" 
          placeholder="device model"
      >
      <button type="submit">ADD</button>
    </form>
    
    <li class="list-group-item" *ngFor="let device of devices">
      <i 
        class="fa" 
        [ngClass]="{
          'fa-android': device.os === 'android',
          'fa-apple': device.os === 'ios'
        }"
        [style.color]="device.os === 'android' ? 'green' : 'grey'"
      ></i>
      {{device.label}}
      <span *ngIf="device.memory">({{device.memory / 1000}}Gb)</span>
      
      <div class="pull-right">
        <span
          *ngIf="device.price"  
          [style.color]="device.price > 500 ? 'red' : null">
          € {{device.price}}
        </span>
        <i 
          class="fa fa-trash" 
          (click)="delete(device)"
        ></i>
      </div>
    </li>
  `,
  styles: []
})
export class CatalogComponent implements OnInit {
  devices: Device[];
  error: any;


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Device[]>(`${URL}/devices`)
      .subscribe((result: Device[]) => {
        this.devices = result;
      });
  }
  
  // NOTA: in RxJS la seconda callback è stata deprecata
  // Vedi soluzione AGGIORNATA
  delete(device: Device) {
    this.http.delete(`${URL}/devices/${device.id}`)
      .subscribe(
        () => {
          const index = this.devices.findIndex(d => d.id === device.id);
          this.devices.splice(index, 1);
        },
        err => this.error = err
      );
  }

  add(form: NgForm) {
    this.http.post<Device>(`${URL}/devices`, form.value)
      .subscribe((result: Device) => {
        this.devices.push(result);
      });
  }

}
```

```typeScript
// VERSIONE AGGIORNATA ANGULAR 13 / RXJS 7.5
// features/catalog/catalog.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Device } from './model/device';
import { catchError, of } from 'rxjs';

const URL = 'http://localhost:3000';

@Component({
  selector: 'app-catalog',
  template: `
    <div *ngIf="error"
         class="alert alert-danger">
      error
      <i class="fa fa-times" (click)="error = null"></i>
    </div>

    <form #f="ngForm" (submit)="add(f)">
      <input
        [ngModel]
        name="label"
        type="text"
        placeholder="device model"
      >
      <button type="submit">ADD</button>
    </form>

    <li class="list-group-item" *ngFor="let device of devices">
      <i
        class="fa"
        [ngClass]="{
          'fa-android': device.os === 'android',
          'fa-apple': device.os === 'ios'
        }"
        [style.color]="device.os === 'android' ? 'green' : 'grey'"
      ></i>
      {{device.label}}
      <span *ngIf="device.memory">({{device.memory / 1000}}Gb)</span>

      <div class="pull-right">
        <span
          *ngIf="device.price"
          [style.color]="device.price > 500 ? 'red' : null">
          € {{device.price}}
        </span>
        <i
          class="fa fa-trash"
          (click)="delete(device)"
        ></i>
      </div>
    </li>
  `,
  styles: []
})
export class CatalogComponent implements OnInit {
  devices: Device[] = [];
  error: HttpErrorResponse | null = null;


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Device[]>(`${URL}/devices`)
      .pipe(
        catchError((err) => of(err))
      )
      .subscribe((result: Device[] | HttpErrorResponse) => {
        if (result instanceof HttpErrorResponse) {
          this.error = result;
        } else {
          this.devices = result;
        }
      });
  }

  // NOTA: in RxJS la seconda callback è stata deprecata
  // Di seguito usiamo l'operatore catchError
  delete(device: Device) {
    this.error = null;
    this.http.delete(`${URL}/devices/${device.id}`)
      .pipe(
        catchError((err) => of(err))
      )
      .subscribe((result: HttpErrorResponse | undefined) => {
        if (result instanceof HttpErrorResponse) {
          this.error = result;
        } else {
          const index = this.devices.findIndex(d => d.id === device.id);
          this.devices.splice(index, 1);
        }
      });
  }

  add(form: NgForm) {
    this.error = null;
    this.http.post<Device>(`${URL}/devices`, form.value)
      .pipe(
        catchError((err) => of(err))
      )
      .subscribe((result: HttpErrorResponse | Device) => {
        if (result instanceof HttpErrorResponse) {
          this.error = result;
        } else {
          this.devices.push(result);
        }
      });
  }

}
```

### Lesson 11.06. PUT e PATCH: edit and update element

```typeScript
// Angular 9 (versione originale)
// features/catalog/catalog.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from './model/device';
import { NgForm } from '@angular/forms';

const URL = 'http://localhost:3000';

@Component({
  selector: 'app-catalog',
  template: `
    <div *ngIf="error" 
        class="alert alert-danger">
      error
      <i class="fa fa-times" (click)="error = null"></i>
    </div>
    
    <form #f="ngForm" (submit)="save(f)">
      <input
          [ngModel]="active?.label"
          name="label"
          type="text" 
          placeholder="device model"
      >
      <button type="submit">
        {{active ? 'EDIT' : 'ADD'}}
      </button>
      
      <button 
          type="button" 
          (click)="reset(f)">RESET</button>
    </form>
    
    <li class="list-group-item"
        [ngClass]="{ 'active': device.id === active?.id}"
        *ngFor="let device of devices"
        (click)="setActive(device)"
    >
      <i 
        class="fa" 
        [ngClass]="{
          'fa-android': device.os === 'android',
          'fa-apple': device.os === 'ios'
        }"
        [style.color]="device.os === 'android' ? 'green' : 'grey'"
      ></i>
      {{device.label}}
      <span *ngIf="device.memory">({{device.memory / 1000}}Gb)</span>
      
      <div class="pull-right">
        <span
          *ngIf="device.price"  
          [style.color]="device.price > 500 ? 'red' : null">
          € {{device.price}}
        </span>
        <i 
          class="fa fa-trash" 
          (click)="delete(device, $event)"
        ></i>
      </div>
    </li>
  `,
  styles: []
})
export class CatalogComponent implements OnInit {
  devices: Device[];
  active: Device;
  error: any;


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Device[]>(`${URL}/devices`)
      .subscribe((result: Device[]) => {
        this.devices = result;
      });
  }

  delete(device: Device, event: MouseEvent) {
    event.stopPropagation();

    this.http.delete(`${URL}/devices/${device.id}`)
      .subscribe(
        () => {
          const index = this.devices.findIndex(d => d.id === device.id);
          this.devices.splice(index, 1);
        },
        err => this.error = err
      );
  }

  save(form: NgForm) {
    if (this.active) {
      this.edit(form);
    } else {
      this.add(form);
    }
  }

  add(form: NgForm) {
    this.http.post<Device>(`${URL}/devices`, form.value)
      .subscribe((result: Device) => {
        this.devices.push(result);
      });
  }

  edit(form: NgForm) {
    this.http.patch<Device>(`${URL}/devices/${this.active.id}`, form.value)
      .subscribe(res => {
        const index = this.devices.findIndex(d => d.id === this.active.id)
        this.devices[index] = res;
      });
  }

  setActive(device: Device) {
    this.active = device;
  }

  reset(form: NgForm) {
    this.active = null;
    form.reset();
  }
}
```

```typeScript
// Versione 14+
// features/catalog/catalog.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from './model/device';
import { NgForm } from '@angular/forms';

const URL = 'http://localhost:3000';

@Component({
  selector: 'app-catalog',
  template: `
    <div *ngIf="error" class="alert alert-danger">
      error
      <i class="fa fa-times" (click)="error = false"></i>
    </div>

    <form #f="ngForm" (submit)="save(f)">
      <input
        [ngModel]="active?.label"
        name="label"
        type="text"
        placeholder="device model"
      >
      <button type="submit">
        {{active ? 'EDIT' : 'ADD'}}
      </button>

      <button
        type="button"
        (click)="reset(f)">RESET</button>
    </form>

    <li class="list-group-item"
        [ngClass]="{ 'active': device.id === active?.id}"
        *ngFor="let device of devices"
        (click)="setActive(device)"
    >
      <i
        class="fa"
        [ngClass]="{
          'fa-android': device.os === 'android',
          'fa-apple': device.os === 'ios'
        }"
        [style.color]="device.os === 'android' ? 'green' : 'grey'"
      ></i>
      {{device.label}}
      <span *ngIf="device.memory">({{device.memory / 1000}}Gb)</span>

      <div class="pull-right">
        <span
          *ngIf="device.price"
          [style.color]="device.price > 500 ? 'red' : null">
          € {{device.price}}
        </span>
        <i
          class="fa fa-trash"
          (click)="delete(device, $event)"
        ></i>
      </div>
    </li>
  `,
  styles: []
})
export class CatalogComponent implements OnInit {
  devices: Device[] = [];
  active: Device | null = null;
  error: boolean = false;


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Device[]>(`${URL}/devices`)
      .subscribe((result: Device[]) => {
        this.devices = result;
      });
  }

  delete(device: Device, event: MouseEvent) {
    event.stopPropagation();

    this.http.delete(`${URL}/devices/${device.id}`)
      .subscribe({
        next: () => {
          const index = this.devices.findIndex(d => d.id === device.id);
          this.devices.splice(index, 1);
        },
        error: () => this.error = true
      })
  }

  save(form: NgForm) {
    if (this.active) {
      this.edit(form);
    } else {
      this.add(form);
    }
  }

  add(form: NgForm) {
    this.http.post<Device>(`${URL}/devices`, form.value)
      .subscribe((result: Device) => {
        this.devices.push(result);
      });
  }

  edit(form: NgForm) {
    this.http.patch<Device>(`${URL}/devices/${this.active?.id}`, form.value)
      .subscribe(res => {
        const index = this.devices.findIndex(d => d.id === this.active?.id)
        this.devices[index] = res;
      });
  }

  setActive(device: Device) {
    this.active = device;
  }

  reset(form: NgForm) {
    this.active = null;
    form.reset();
  }
}
```




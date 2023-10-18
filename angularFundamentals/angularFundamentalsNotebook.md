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
- [ ] day2
- [ ] day3
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


### Lesson 5.01. Styles and Components

```typeScript
import { Component, OnInit } from '@angular/core';

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
import { Component, OnInit } from '@angular/core';

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

```typeScript
// Versione 2
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <li
      *ngFor="let user of users"
      [ngClass]="getCls(user)"
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
  
  getCls(user) {
    return {
      'big': user.gender === 'M',
      'male': user.gender === 'M'
    }
  }
}
```


### Lesson 5.04. Inline Styling


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

## Lesson 6. 


### Lesson 6.01. 
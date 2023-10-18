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






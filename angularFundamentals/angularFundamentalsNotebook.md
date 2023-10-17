# Angular Fundamentals Notebook

## Info

[Video course by Fabio Biondi](https://www.fabiobiondi.dev/video-courses/angular-fundamentals)
- bought on 10/16/2023
- start on 10/17/2023
- start on 


# To-Do List

- [x] Planning
- [x] Start day1

# Angular 16 new course

## Lesson 1 -  Standalone Components

### Lesson 1.01. Standalone project

    npx -p @angular/cli@next ng new angular16-demo -s -t -S --standalone

-s  inline style
-t  inline template
-S  skip test
-- standalone from v16. // no modules, now are optional

this options goes to "angular.json" file 

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "schematics": {
      "@schematics/angular:component": {
        "inlineTemplate": true,
        "inlineStyle": true,
        "skipTests": true
      }
    }
  }
}
```

### Lesson 1.03. Standalone Components

```text
ng g c features/demo1 --flat
ng g c features/demo2 --flat
ng g c features/demo3 --flat
```

```typescript
// PRIMO STEP
// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Demo1Component } from './features/demo1.component';
import { Demo2Component } from './features/demo2.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
    CommonModule,
    RouterOutlet,
    Demo1Component,
    Demo2Component
    ],
    template: `
        Navigation Bar here
        <hr>
        <app-demo1 />
        <app-demo2 />
        <router-outlet></router-outlet>
    `,
    styles: [],
})
export class AppComponent { }
```


```typescript
// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
    CommonModule,
    RouterOutlet,
    ],
    template: `
    Navigation Bar here
    <hr>
    <router-outlet></router-outlet>
    `,
    styles: [],
})
export class AppComponent { }
```

### Lesson 1.04. Router with standalone components

How router works in Angular 16
Put the components in the router.ts array

```typescript
// routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'demo1', loadComponent: () => import('./features/demo1.component').then(c => c.Demo1Component)},
    { path: 'demo2', loadComponent: () => import('./features/demo2.component').then(c => c.Demo2Component)},
    { path: 'demo3', loadComponent: () => import('./features/demo3.component').then(c => c.Demo3Component)},
    { path: '', redirectTo: 'demo1', pathMatch: 'full' }
];
```

Main import of RouterOutletModule

```typescript
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
    provideRouter(routes),
    ]
};
```


### Lesson 1.05. Navigation Bar

```text
ng g c core/nav-bar --flat
```

```typescript
// app.component
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './core/nav-bar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        NavBarComponent
    ],
    template: `
    <app-nav-bar />
    <hr>
    <router-outlet></router-outlet>
    `,
    styles: [],
})

export class AppComponent {

}
```

### Lesson 1.06. provideHttpClient


```typescript
// app.config.ts
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
    provideRouter(routes),
    provideHttpClient() // <--- add this
    ]
};
```

```typescript
export class Demo1Component {
    constructor(private http: HttpClient) { // use of HttpClient
        http.get('https://jsonplaceholder.typicode.com/users')
        .subscribe(res => {
        console.log(res)
        })
    }
}
```

## Lesson 2 -  Signals

### Lesson 2.07. inject and pipe async

```typescript
// features/demo1.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-demo1',
    standalone: true,
    imports: [CommonModule],
    template: `
    <p>
    demo1 works!
    </p>
    
        <ul>
          <li *ngFor="let user of users$ | async">
            {{user.name}}
          </li>
        </ul>
    
    `,
    styles: [
    ]
})
export class Demo1Component {
    http = inject(HttpClient)
    users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
}

interface User {
    id: number;
    name: string;
}
```

### Lesson 2.08. signal - set e update

[Signals documentation](https://angular.io/guide/signals).

new in v16.x
> Angular Signals is a system that granularity tracks how and where your state is used throughout an application, allowing the framework to optimize rendering updates.

Optimezed rendering updates

How change detection works
![Change Detection](https://i.imgur.com/92AB4Gb.png)

We can use OnPush strategy to optimize rendering.

![Change Detection Events](https://i.imgur.com/2k0V6dP.png)

```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-demo2',
    standalone: true,
    imports: [CommonModule],
    template: `
    <h2>Counter Demo with Signal</h2>
    <pre>{{counter()}}</pre>
    
        <button (click)="inc()">+</button>
        <button (click)="reset()">reset</button>
    `,
})
export class Demo2Component {
    counter = signal(0)
    
    inc() {
        // this.counter.set(this.counter() + 1)
        this.counter.update(c => c + 1)
    }
    
    reset() {
        this.counter.set(0)
    }
}
```
### Lesson 2.9. signal - effects

```typescript
import { HttpClient } from '@angular/common/http';
import { Component, signal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-demo2',
    standalone: true,
    imports: [CommonModule],
    template: `
    <h2>Counter Demo with Signal</h2>
    <pre>{{counter()}}</pre>
    
        <button (click)="inc()">+</button>
        <button (click)="reset()">reset</button>
    `,
})
export class Demo2Component {
    counter = signal(1)
    http = inject(HttpClient)
    
    constructor() {
        effect( () => {
            this.http.get(`https://jsonplaceholder.typicode.com/users/${this.counter()}`)
            .subscribe(console.log)
        })
    }
    
    inc() {
        // this.counter.set(this.counter() + 1)
        this.counter.update(c => c + 1)
    }
    
    reset() {
        this.counter.set(0)
    }
}
```

### Lesson 2.10. signal - derived state e computed

In Angular 16, a Signal is a wrapper around a value that can notify interested consumers when that value changes. 
Signals can contain any value, from simple primitives to complex data structures. A signal’s value is always read through a getter function, which allows Angular to track where the signal is used.

There are two types of signals: Writable signals and Computed signals.

Writable signals provide an API for updating their values directly. You create writable signals by calling the signal function with the signal’s initial value. 
To change the value of a writable signal, you can either .set() it directly or use the .update() operation to compute a new value from the previous one1.

Computed signals derive their value from other signals. You define one using computed and specifying a derivation function. 
The computed signal depends on other signals. Whenever those signals update, Angular knows that anything which depends on either of those signals needs to update as well. 
Computed signals are both lazily evaluated and memoized. This means that the derivation function does not run to calculate its value until the first time it is read.
Once calculated, this value is cached, and future reads will return the cached value without recalculating1.

```typescript
import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-demo2',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <h2>Counter Demo with Signal</h2>
    <pre>{{counter()}}</pre>
    
        <input type="text" ngModel>
        <button (click)="inc()">+</button>
        <button (click)="reset()" *ngIf="!isZero()">reset</button>
    `,
})
export class Demo2Component {
    counter = signal(0)
    
    /*
    * ✅ GOOD: signal
    * triggered only when counter signal is updated
      */
      isZero = computed(() => {
      return this.counter() === 0;
      })
    
    /*
    * ❌ WRONG: triggered too many times
    * when Change Detection is triggered
      */
      /*
      isZero() {
      console.log('render')
      return this.counter() === 0
      }
      */
    
    inc() {
        this.counter.update(c => c + 1)
    }
    
    reset() {
        this.counter.set(0)
    }
}
```
### Lesson 2.11. signal - array and typing

```typescript
// features/demo4.ts
import {Component, computed, signal} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-demo4',
    standalone: true,
    imports: [CommonModule],
    template: `
        <h2>Demo 4 - Todo List</h2>
    
        <div *ngIf="noTodos()">there are no todos</div>
    
        <input placeholder="ToDo to add" type="text" (keydown.enter)="addTodo($event)">
    
        <li *ngFor="let todo of todos(); let i = index">
          <input type="checkbox" [checked]="todo.completed" (change)="toggleTodo(todo)">
          {{ todo.title }}
          <button (click)="deleteTodo(todo)">❌</button>
        </li>
    
        <h4>Data RAW: {{todoCount()}}</h4>
        <pre>{{todos() | json}}</pre>
      `,
})
export class Demo4Component {

    todos = signal<Array<Todo>>([
        { id: Date.now()+1, title: 'Todo 1', completed: true },
        { id: Date.now()+2, title: 'Todo 2', completed: false },
        { id: Date.now()+3, title: 'Todo 3', completed: true },
    ])

    // derived signal
    noTodos = computed(() => {
        return this.todos().length === 0
    })

    todoCount = computed(() => {
        return this.todos().length
    })

    deleteTodo(todo: Todo) {
        this.todos.update((todos => {
            return todos.filter(t => t.id !== todo.id)
        }))
    }

    addTodo(event: Event) {
        const target = event.target as HTMLInputElement; // reference to input element
        const newTodo: Todo = {
            id: Date.now(),
            title: target.value,
            completed: false
        }
        // update with spread operator, all old todos + new todo
        this.todos.update(todos => {
            return [...todos, newTodo]
        })
        target.value = ''; // empty the input value
    }

    toggleTodo(index: number) { // index: Todo
        this.todos.mutate(todos => {
            todos[index].completed = !todos[index].completed
        })
        /*
        this.todos.update( todos =>{
            return todos.map(todo => todo.id === index.id ? {...todo, completed: !todo.completed} : todo)
        })
         */
    }
}
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
```

### Lesson 2.13. Signal - ToDo List e Rest API

Install json-server as a dev dependency
```text
npm i json-server -D
```

```json
{
    "todos": [
        { "id": 1, "title": "ToDo 1", "completed": true },
        { "id": 2, "title": "ToDo 2", "completed": false },
        { "id": 3, "title": "ToDo 3", "completed": true }
    ]
}
```
In package.json ad a script:

```json
"server": "json-server --watch server/db.json"
```

```typescript
// features/demo3.component.ts
// STEP 1 (di seguito troverai lo step finale)

@Component({
    selector: 'app-demo5',
    standalone: true,
    imports: [CommonModule],
    template: `
    <h2>Demo 5 - ToDo List e Rest API</h2>

    <div *ngIf="noTodos()">there are no todos</div>

    <input placeholder="ToDo to add" type="text" (keydown.enter)="addTodo($event)">

    <li *ngFor="let todo of todos(); let i = index">
      <input type="checkbox" [checked]="todo.completed" (change)="toggleTodo(todo, i)">
      {{ todo.title }}
      <button (click)="deleteTodo(todo)">❌</button>
    </li>

    <pre>{{todos() | json}}</pre>
  `,
})
export class Demo5Component {
    http = inject(HttpClient);

    todos = signal<Todo[]>([]) // initial value as empty array

    // use of lifecycle hook ngOnInit
    ngOnInit() {
        this.http.get<Todo[]>('http://localhost:3000/todos')
            .subscribe(result => {
                this.todos.set(result);
            })
    }

    noTodos = computed(() => {
        return this.todos().length === 0
    })

    deleteTodo(todo: Todo) {
        this.http.delete(`http://localhost:3000/todos/${todo.id}`) // DELETE
            .subscribe(() => {
                this.todos.update((todos => todos.filter(t => t.id !== todo.id)))
            })
    }

    addTodo(event: Event) {
        const target = event.target as HTMLInputElement;
        this.http.post<Todo>('http://localhost:3000/todos', { // POST
            // ID is generated by server
            title: target.value,
            completed: false
        })
            .subscribe(newTodo => {
                this.todos.update(todos => {
                    return [...todos, newTodo]
                })
                target.value = '';
            })
    }

    toggleTodo(todo: Todo, index: number){
        this.http.patch<Todo>(`http://localhost:3000/todos/${todo.id}`, { // PATCH
            ...todo,
            completed: !todo.completed
        })
            .subscribe(updatedTodo => {
                /*
                this.todos.mutate(todos =>{
                  todos.[index].completed = !todos[index].completed
                })
                */
                this.todos.update(todos => todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo))
            })
    }
}

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

```

### Lesson 2.14. ReactiveForms e RxJS and async pipe

model/meteo.ts

```typescript
// model/meteo.ts
// generated by https://jvilk.com/MakeTypes/
export interface Meteo {
  coord: Coord;
  weather?: (WeatherEntity)[] | null;
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
export interface Coord {
  lon: number;
  lat: number;
}
export interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface Wind {
  speed: number;
  deg: number;
}
export interface Clouds {
  all: number;
}
export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
```

Demo6Component.ts

```typescript
@Component({
    selector: 'app-demo6',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule // reactive forms
    ],
    template: `
    <h2>Demo 6 - ReactiveForms e RxJS Rest API - Weather App</h2>

    <input type="text" placeholder="Search City" [formControl]="input">
    <ng-container *ngIf="weather$ | async as meteo">
      <h2 *ngIf="meteo">Info:</h2>
      <pre *ngIf="meteo">{{meteo.sys | json}}</pre>
      <h2 *ngIf="meteo">Temperature: {{meteo?.main?.temp}}°</h2>
      <h2 *ngIf="meteo">Humidity: {{meteo?.main?.humidity}}%</h2>
      <pre>{{meteo | json}}</pre>
    </ng-container>
  `,
})
export class Demo6Component {
    input = new FormControl('')
    http = inject(HttpClient)
    weather$ = this.input.valueChanges
        .pipe(
            debounceTime(700),
            mergeMap(text => this.http.get<Weather>(`http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534`))
        )
}

```

### Lesson 2.16. from observable to signal

```typescript
// features/demo4.component.ts
@Component({
    selector: 'app-demo7',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
    <input type="text" placeholder="Search City" [formControl]="input">
    <h1 *ngIf="weather()">Temperature: {{weather()?.main?.temp}}°</h1>
    <hr>
    <button (click)="input.setValue('Trieste')">Trieste</button>
    <button (click)="input.setValue('Milano')">Milano</button>
    <button (click)="input.setValue('Palermo')">Palermo</button>
    <button (click)="input.setValue('Domodossola')">Domodossola</button>
  `,
})
export class Demo7Component {
    input = new FormControl('')
    http = inject(HttpClient)

    weather = toSignal( // from observable to signal, here the code are updated only when signal is emitted
        this.input.valueChanges
            .pipe(
                debounceTime(700),
                mergeMap(text => this.http.get<Weather>(`http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534`))
            )
    )
}
```

### Lesson 2.17. from signal to observable

```typescript
@Component({
    selector: 'app-demo7',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
    <h2>Demo 7 - toSignal / to Observable  </h2>

    <input
      type="text"
      placeholder="Search City"
      (input)="onChangeText($event)"
      [value]="city()"
    >

    <hr>
    <button (click)="city.set('Trieste')">Trieste</button>
    <button (click)="city.set('Milano')">Milano</button>
    <button (click)="city.set('Palermo')">Palermo</button>
    <h1 *ngIf="weather$ | async as weather">Temperature: {{weather?.main?.temp}} °</h1>
  `,
})
export class Demo7Component {
    city = signal('New york')
    http = inject(HttpClient)

    weather$ = toObservable(this.city) // use of toObservable from signal, now i can use all the rxjs operators anf features
        .pipe(
            filter(text => text.length > 3),
            debounceTime(1000),
            mergeMap(
                text => this.http.get<Weather>(`http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534`)
                    .pipe(
                        catchError(e => of(null)) // resolve the error if the city is not found, regenerating the observable when error occurs
                    )
            ),
        )

    onChangeText(event: Event) {
        const input = event.currentTarget as HTMLInputElement;
        this.city.set(input.value)
    }
}
```
# Lesson 3 - New Api

### Lesson 3.18. from signal to observable


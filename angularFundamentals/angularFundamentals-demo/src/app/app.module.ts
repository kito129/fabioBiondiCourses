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

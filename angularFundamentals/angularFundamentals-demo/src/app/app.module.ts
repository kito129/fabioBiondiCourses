import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { DemoComponent } from './features/demo.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
	declarations: [
		AppComponent,
		DemoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

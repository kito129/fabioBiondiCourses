// core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

// components
import { AppComponent } from './app.component';
import { DemoComponent } from './features/demo.component';
import { CorrectDemoComponent } from './features/correct-demo.component';
import { StylingComponent } from './features/styling.component';
import { TemplateDrivenFormComponent } from './features/template-driven-form.component';

@NgModule({
	declarations: [
		AppComponent,
		DemoComponent,
		CorrectDemoComponent,
		StylingComponent,
  	TemplateDrivenFormComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

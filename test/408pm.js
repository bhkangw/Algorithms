// START IMPORTS
const platformBrowserDynamic = require('@angular/platform-browser-dynamic');
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import does not work in Codepen, using const instead
// const {Component} = ng.core;
// const {bootstrap} = ng.platform.browser;

// END IMPORTS

// --- MyApp
@Component({
	selector: 'my-app',
	template: `
<section>
  <h1>Yo</h1>
  <p>Add to List:</p>
  {{list | json}}
  <form #listForm="ngForm" (submit)="addList($event)">
    <input type="text" name="newItem" required>
    <input type="submit" value="Add">
  </form>
</section>
    `
})
class AppComponent {
	constructor() {
		this.list = [];
	}
	addList(e) {
		this.list.push(e.path["0"]["0"].value);
		console.log(this.list);
		e.path["0"]["0"].value = '';
	}
}
// --- MyApp

// END Components

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})
class AppModule { }

// BOOT ANGULAR:
// bootstrap(AppComponent);
platformBrowserDynamic().bootstrapModule(AppModule)
	.then(() => console.log('in plat'))
	.catch(() => console.log('broke plat'));


///// 4:24pm

const { Component } = ng.core;
const { bootstrap } = ng.platform.browser;

@Component({
	selector: 'my-app',
	template: `
<div class="jumbotron text-center">
  <h1>LabKey</h1>
  <h6>Partners In Science</h6>
</div>
<div class="container">
  <h1>Welcome to Biologics</h1>
  <h4>Integrated Assay Results:</h4>
  <h6>{{list | json}}</h6>
  <form #listForm="ngForm" (submit)="addList($event)">
  <input type="text" name="newItem" required>
  <input type="submit" value="Add" class="btn-xs btn-success">
  </form>
</div>
    `
})
class AppComponent {
	constructor() {
		this.list = [];
	}
	addList(e) {
		this.list.push(e.path["0"]["0"].value);
		console.log(this.list);
		e.path["0"]["0"].value = '';
	}
}

bootstrap(AppComponent);


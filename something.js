// START IMPORTS
// import does not work in Codepen, using const instead
const {Component} = ng.core;
const {bootstrap} = ng.platform.browser;
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// END IMPORTS

// START Components
// Please note: as we are not exporting/importing but everything is in a single file, we need to:
// inline the templates as strings, and
// list the components so that any subcomponents come before the component using them (i.e. app is last).

// --- MyApp
@Component({
    selector: 'my-app',
    template: `
<section>
  <h1>Yo</h1>
  <p>Add to List:</p>
  <form>
    <input type="text" name="item" required [(ngModel)]='item'>
  </form>
  <button (click)="addItem()">
    Add
  </button>
</section>
    `
})
class AppComponent {
  item: String;
  constructor(){
    this.list = [];
    this.item = '';
  }
  
  addItem(){
    this.list.push(req.body.newItem)
    console.log(this.list);
  }
}
// --- MyApp

// END Components

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// BOOT ANGULAR:
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
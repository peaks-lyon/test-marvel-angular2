import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule }    from '@angular/http';
import { Config } from './config';

@NgModule({
  imports:      [ BrowserModule, HttpModule],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
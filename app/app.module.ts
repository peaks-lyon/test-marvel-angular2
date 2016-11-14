import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import { CharacterComponent } from './character.component';

@NgModule({
  imports:      [ 
  BrowserModule,
  HttpModule,
  RouterModule.forRoot([
      { path: ':page', component: CharacterComponent }
    ])
  ],
  declarations: [ AppComponent, CharacterComponent ],
  bootstrap: [ AppComponent ],
 
})
export class AppModule { }
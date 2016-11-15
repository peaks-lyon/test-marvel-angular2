import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import { CharacterComponent } from './character.component';
import {Ng2PaginationModule} from 'ng2-pagination';


@NgModule({
  imports:      [ 
  BrowserModule,
  HttpModule,
  Ng2PaginationModule,
  RouterModule.forRoot([
   { path: '', component: CharacterComponent },
  	{ path: ':page', component: CharacterComponent }
    ])
  ],
  declarations: [ AppComponent, CharacterComponent ],
  bootstrap: [ AppComponent ],
 
})
export class AppModule { }
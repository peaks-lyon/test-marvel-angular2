    import { Component } from '@angular/core';

    import { Character } from './character';
   
    import { ApiService } from './api.service';
    import { Config } from './config'; 




    @Component({
      selector: 'my-app',
      templateUrl: './charactersList.html',
      providers: [ApiService, Config]
    })
    export class AppComponent {
    private characters;
    private results; 
    constructor(private apiService: ApiService) { }
      
      ngOnInit() {
        this.results = this.getCharacters();

      }
   

    getCharacters() {
      return this.apiService.call('public/characters',{'offset' : 100, 'limit' : 22}).subscribe(data => this.characters = data.results);

    }

    }
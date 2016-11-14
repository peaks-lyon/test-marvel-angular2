    import { Component } from '@angular/core';

    import { Character } from './character';
    import { ApiService } from './api.service';





    @Component({
      selector: 'my-app',
      template: '<h1>Marvel\'s characters :</h1><table><thead><tr><th>Name</th><th>Image</th></thead><tbody><tr *ngFor="let character of characters"><td>{{ character.name }}</td><td><img style="width:75px" src="{{ character.thumbnail.path }}.{{ character.thumbnail.extension }}" /></td></tr></tbody></table>',
      providers: [ApiService]
    })
    export class AppComponent {
    private characters;
    private results; 
    constructor(private apiService: ApiService) { }
      
      ngOnInit() {
        this.results = this.getCharacters();
        console.log(this.characters);
      }
   

    getCharacters() {
      return this.apiService.call('public/characters',{'offset' : 100, 'limit' : 22}).subscribe(data => this.characters = data.results);

    }

    }
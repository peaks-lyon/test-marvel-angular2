  import { Component } from '@angular/core';
  import { Character } from './character';
  import { ApiService } from './api.service';
  import { ActivatedRoute } from '@angular/router';


@Component({
      selector: 'my-app',
      template: '<h2>Marvel\'s characters :</h2><table><thead><tr><th>Name</th><th>Image</th></thead><tbody><tr *ngFor="let character of characters | paginate: { itemsPerPage: 10, currentPage: p }"><td>{{ character.name }}</td><td><img style="width:75px" src="{{ character.thumbnail.path }}.{{ character.thumbnail.extension }}" /></td></tr></tbody></table><pagination-controls (pageChange)="p = $event"></pagination-controls>',
      providers: [ApiService]
    })



export class CharacterComponent {
    private characters;
    private results; 

    constructor(private apiService: ApiService) { 


    }
      
      ngOnInit() {
        this.results = this.getCharacters();
        
      }
   

    getCharacters() {
      return this.apiService.call('public/characters',{'offset' : 100, 'limit' : 22}).subscribe(data => this.characters = data.results);

    }

    }

  
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var api_service_1 = require('./api.service');
var CharacterComponent = (function () {
    function CharacterComponent(apiService) {
        this.apiService = apiService;
    }
    CharacterComponent.prototype.ngOnInit = function () {
        this.results = this.getCharacters();
    };
    CharacterComponent.prototype.getCharacters = function () {
        var _this = this;
        return this.apiService.call('public/characters', { 'offset': 100, 'limit': 22 }).subscribe(function (data) { return _this.characters = data.results; });
    };
    CharacterComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h2>Marvel\'s characters :</h2><table><thead><tr><th>Name</th><th>Image</th></thead><tbody><tr *ngFor="let character of characters | paginate: { itemsPerPage: 10, currentPage: p }"><td>{{ character.name }}</td><td><img style="width:75px" src="{{ character.thumbnail.path }}.{{ character.thumbnail.extension }}" /></td></tr></tbody></table><pagination-controls (pageChange)="p = $event"></pagination-controls>',
            providers: [api_service_1.ApiService]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], CharacterComponent);
    return CharacterComponent;
}());
exports.CharacterComponent = CharacterComponent;
//# sourceMappingURL=character.component.js.map
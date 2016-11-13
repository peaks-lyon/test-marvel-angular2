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
var md5_1 = require('ts-md5/dist/md5');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.url = 'http://gateway.marvel.com/v1';
        this.privateKey = 'ade5d4dcd90d9e04ca3e0e1a7d6965ab57c1ac85';
        this.publicKey = '511d522c1d1ef717b5624e10083de5dc';
    }
    ApiService.prototype.call = function (route, parameters) {
        var url = this.url + '/' + route;
        var urlParameter = '';
        if (parameters) {
            for (var key in parameters) {
                urlParameter += "&" + key + "=" + parameters[key];
            }
        }
        var ts = Date.now();
        var hash = md5_1.Md5.hashStr(ts + this.privateKey + this.publicKey);
        url += "?apikey=" + this.publicKey + "&ts=" + ts + "&hash=" + hash;
        if (urlParameter) {
            url += urlParameter;
        }
        return this.http
            .get(url)
            .map(function (response) { return response.json().data.results; });
    };
    ApiService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map
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
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
var config_1 = require('./config');
var ApiService = (function () {
    function ApiService(http, config) {
        this.http = http;
        this.config = config;
        this.url = config.url;
        this.privateKey = config.privateKey;
        this.publicKey = config.publicKey;
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
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ApiService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_1.Config])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map
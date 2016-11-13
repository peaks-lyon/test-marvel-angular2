import { Injectable } from '@angular/core';
import  { Md5 } from 'ts-md5/dist/md5';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
 import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
	private url;
	private privateKey;
	private publicKey;
	constructor(private http: Http) { //, private url : string,private privateKey : number, private publicKey : number
		this.url = 'http://gateway.marvel.com/v1';
		this.privateKey= 'ade5d4dcd90d9e04ca3e0e1a7d6965ab57c1ac85';
		this.publicKey = '511d522c1d1ef717b5624e10083de5dc';
	}
public call(route,parameters) {
	var url = this.url+'/'+route;
        var urlParameter = '';
        if (parameters)
        {
            for (let key in parameters)
            {
                urlParameter += `&${key}=${parameters[key]}`;
            }
        }
        var ts = Date.now();
        
        var hash = Md5.hashStr(ts+this.privateKey+this.publicKey);

        url += `?apikey=${this.publicKey}&ts=${ts}&hash=${hash}`;

        if (urlParameter)
        {
            url += urlParameter;
        }

        return			this.http
        				.get(url)
        				.map(response => response.json().data.results)
        				
      
        

}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
}
import { Injectable } from '@angular/core';
import  { Md5 } from 'ts-md5/dist/md5';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
 import 'rxjs/add/operator/map';
import { Config } from './config'; 

@Injectable()
export class ApiService {
	private url;
	private privateKey;
	private publicKey;
	constructor(private http: Http, private config: Config) { //, private url : string,private privateKey : number, private publicKey : number
		this.url = config.url;
		this.privateKey= config.privateKey;
		this.publicKey = config.publicKey;
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
        				.map(response => response.json().data)
        				.catch(this.handleError);
      
        

}

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
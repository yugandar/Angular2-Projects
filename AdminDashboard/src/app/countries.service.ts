import { Injectable } from '@angular/core';
import { Http,Response } from  '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from 'rxjs';

@Injectable()
export class CountriesService {

  constructor(private _http:Http) { }
  url:string;
   getCountries(countryname){
     this.url="https://restcountries.eu/rest/v2/name/"+countryname+"?fullText=true";

    // return this._http.get("https://restcountries.eu/rest/v2/all")
    return this._http.get(this.url)
      .map((res:Response)=>{
        {
          return res.json();
        }
      })
      .catch(error=>Observable.throw(error.json()))

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getAllPokemon() {
    return this.http.get('https://ecom-pokemon-query.azurewebsites.net/pokemon')
  }


}

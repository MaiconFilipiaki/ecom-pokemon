import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';


import { EventEmitterService } from '../../event-emits.service';
interface Pokemon {
  _id: string
  _name: string
  _images: string[]
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemons: any;

  constructor(
    private service: HomeService,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<any>('https://ecom-pokemon-query.azurewebsites.net/pokemon').subscribe(data => {
      this.pokemons = data._pokemons
    })
  }

  botaoClick(pokemon: string) {
    const pokemonCache = localStorage.getItem('item-add-cart')
    if (pokemonCache) {
      const convert = JSON.parse(pokemonCache)
      convert.cart = [...convert.cart, pokemon]
      localStorage.setItem('item-add-cart', JSON.stringify(convert))
    } else {
      localStorage.setItem('item-add-cart', JSON.stringify({cart: [pokemon]}))
    }
    EventEmitterService.get('add-cart').emit("OPA");
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

import { EventEmitterService } from '../../event-emits.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pokemonsCart = 0

  constructor(private router: Router) {
    EventEmitterService.get('add-cart').subscribe(() => {
      this.pokemonsCart = this.pokemonsCart + 1
    });
    EventEmitterService.get('remove-cart').subscribe(() => {
      this.pokemonsCart = this.pokemonsCart - 1
    });
    EventEmitterService.get('reset-cart').subscribe(() => {
      this.pokemonsCart = 0
    });
  }

  ngOnInit(): void {
    const pokemons = localStorage.getItem('item-add-cart')
    if (pokemons) {
      this.pokemonsCart = JSON.parse(pokemons).cart.length
    }
  }

  redirectCart() {
    this.router.navigate(['/cart'])
  }

}

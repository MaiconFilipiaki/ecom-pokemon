import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  email: string | undefined;
  pokemons: any = []
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.email !== '') {
      this.http.get('https://ecom-pokemon-query.azurewebsites.net/checkout/'+this.email).subscribe(
        (i: any) => {
          console.log(i)
          if (i.length > 0) {
            this.pokemons = i.map((a: any) => {
              const objectParse = JSON.parse(a.pokemonId) || null
              console.log(JSON.parse(objectParse).cart,
                {
                ...a,
                pokemonId: JSON.parse(objectParse).cart
              })
              return {
                ...a,
                pokemonId: JSON.parse(objectParse).cart
              }
            })
          }
        }
      )
    }
    console.log(this.email)
  }
}

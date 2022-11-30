import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventEmitterService } from '../../event-emits.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  pokemonCache: any = []
  constructor(public dialog: MatDialog) {
    EventEmitterService.get('reset-cart').subscribe(() => {
      this.pokemonCache = []
      this.dialog.closeAll()
    });
  }

  ngOnInit(): void {
    const pokemons = localStorage.getItem('item-add-cart')
    if (pokemons) {
      this.pokemonCache = JSON.parse(pokemons).cart
    }
  }

  removeItem(i: any) {
    this.pokemonCache.splice(i, 1);
    EventEmitterService.get('remove-cart').emit("OPA");
    localStorage.setItem('item-add-cart', JSON.stringify({cart: this.pokemonCache}))
  }

  openDialog() {
    const dialogRef = this.dialog.open(Modal);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

interface Form {
  email: string,
  street: string,
  numberHome: string,
  neighborhood: string,
}

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class Modal implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private alertService: AlertService, private http:HttpClient) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      street: ['', [Validators.required]],
      numberHome: ['', [Validators.required]],
      neighborhood: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const item = localStorage.getItem('item-add-cart')
      this.http.post('https://ecom-pokemon-command.azurewebsites.net/checkout', {
        ...this.form.value,
        pokemonId: JSON.stringify(item)
      }).subscribe(
        i => {
          EventEmitterService.get('reset-cart').emit("OPA");
          localStorage.removeItem('item-add-cart')
          this.alertService.success('Pedido Realizado com sucesso');
        }
      )

    }

  }
}

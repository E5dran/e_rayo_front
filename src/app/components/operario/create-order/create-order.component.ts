import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  createOrder: FormGroup;

  constructor(
    private orderService: OrderService
  ) {
    this.createOrder = new FormGroup({
      addressee: new FormControl(),
      description: new FormControl(),
      n_items: new FormControl(),
      destination_address: new FormControl(),
      truck_plate: new FormControl(),
      departure_date: new FormControl(),
      arrival_date: new FormControl()
    });
  }

  ngOnInit() {

  }

  async onSubmit() {
    const newOrder = await this.orderService.register(this.createOrder.value);
    console.log(this.createOrder.value);
    console.log(newOrder);


  }

}

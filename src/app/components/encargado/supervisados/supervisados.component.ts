import { Component, OnInit, } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';

@Component({
  selector: 'app-supervisados',
  templateUrl: './supervisados.component.html',
  styleUrls: ['./supervisados.component.css']
})
export class SupervisadosComponent implements OnInit {
  nombre: string
  apellido: string
  fecha: Date
  orders: Order[]
  constructor() {
    this.orders = [{
      Id: 1,
      Warehouse_Id: 1,
      Status: true,
      Addressee: 'Juan Perez',
      Description: 'Caja de carton',
      N_Items: 1,
      Destination_Address: 'Calle 1',
      Creation_Date: new Date(),
      Departure_Date: new Date(),
      Arrival_Date: new Date(),
      Truck_Plate: 'ABC123',
      Category: 'Caja'

    }]
    this.nombre = 'Juan'
    this.apellido = 'Perez'
    this.fecha = new Date()
  }

  ngOnInit(): void {
  }

}

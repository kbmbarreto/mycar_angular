import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Manufacturer} from "../../models/manufacturer.interface";

@Component({
  selector: 'app-manufacturer-list',
  templateUrl: './manufacturer-list.component.html',
  styleUrls: ['./manufacturer-list.component.sass']
})
export class ManufacturerListComponent implements OnInit {

  @Input() headers: Array<{headerName: string, fieldName: keyof Manufacturer}> = [];
  @Input() manufacturers: Array<Manufacturer> = [];
  @Output() manufacturer = new EventEmitter();

  constructor() { }

  selectManufacturer(manufacturer: Manufacturer) {
    this.manufacturer.emit(manufacturer);
  }

  ngOnInit(): void {
  }
}

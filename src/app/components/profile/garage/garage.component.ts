import { Component, OnInit } from '@angular/core';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {
  faMotorcycle = faMotorcycle;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Carros } from '../models/carros';
import { CarrosService } from '../services/carros.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  carros = {} as Carros;
  Carros : Carros[] | undefined;


  constructor(private CarrosService: CarrosService) { }

  ngOnInit(): void {

    this.CarrosService.ListarCarros().subscribe((carros:Carros[]) => {
      this.Carros = carros;
    })

  }

}

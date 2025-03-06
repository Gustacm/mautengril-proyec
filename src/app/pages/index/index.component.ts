import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewService } from '../../services/view.service';
import { HomeComponent } from '../home/home.component';
import { LocationService } from '../../services/location.service';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HomeComponent, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {
  distanceToLocal: number | null = null; 

  constructor(
    public viewService: ViewService,
    private locationService: LocationService 
  ) {}
  async ngOnInit() {
    try {
      await this.locationService.getUserLocation(); 
      console.log(`Distancia al local: ${this.locationService.distanceMeters} metros`);
      console.log(`Distancia al local: ${this.locationService.distanceKilometers} km`);
      console.log(`Precio del envío: $${this.locationService.shippingCost}`);

    } catch (error) {
      console.error('Error obteniendo la ubicación:', error);
    }
  }
  

  closeComponent() {
    this.viewService.clearComponent();
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewService } from '../../services/view.service';
import { HomeComponent } from '../home/home.component';
import { LocationService } from '../../services/location.service';
import { ShoppingComponent } from "../../component/Home-Componen/shopping-componen/shopping/shopping.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, HomeComponent  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  constructor(
    public viewService: ViewService,
  ) {}

  closeComponent() {
    this.viewService.clearComponent();
  }
}

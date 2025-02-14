import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalProductService } from './global-product.service';
import { Product } from './interface/Product.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Maunten_gril';






}



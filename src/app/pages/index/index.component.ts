import { Component } from '@angular/core';
import { ViewService } from '../../services/view.service';
import { HomeComponent } from "../home/home.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  imports: [HomeComponent,CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  constructor(public viewService: ViewService) {}

  closeComponent() {
    this.viewService.clearComponent();
  }

}

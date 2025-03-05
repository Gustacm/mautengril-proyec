import { CommonModule } from '@angular/common';
import { Component, Input, Injector, inject, signal } from '@angular/core';
import { ViewService } from '../../../services/view.service';
import { DetailComponent } from '../../Detail-Component/detail/detail.component';
import { Product } from '../../../interface/Product.interface';
@Component({
  selector: 'app-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  like=signal('dislike');
  colorLike=signal('rgba(255, 230, 0, 0.27)');
  product: any;
  



  private viewService = inject(ViewService);
  private injector = inject(Injector);
  
  @Input() date: any;

  ngOnInit() {
    this.product = this.date;
  }

  

  toggleLike() {
    if(this.like() === 'like') {
    this.like.set('dislike');
    this.colorLike.set('rgba(255, 230, 0, 0.27)');
  }
    else {
    this.like.set('like');
    this.colorLike.set('rgba(255, 230, 0, 0.51)');
    }
}




selectProduct() {
  const customInjector = Injector.create({
    providers: [{ provide: 'productData', useValue: this.product }],
    parent: this.injector,
  });

  this.viewService.setComponent(DetailComponent, customInjector);
}

}
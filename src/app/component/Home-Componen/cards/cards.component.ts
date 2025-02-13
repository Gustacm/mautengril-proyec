import { Component, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-cards',
  imports: [CardComponent,CommonModule],
  standalone: true,
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})

export class CardsComponent {
  data = signal(
 [
      {
          nombre: 'Pizza Pepperoni',
          precio: 15000,
          descripcion: 'Pizza con base de tomate, queso mozzarella y pepperoni',
          like: 0.8,
          isHot() {
            if(this.like > 4) {
                return true;
          }else {return false;}
          },
      },
      {
          nombre: 'Sushi Roll',
          precio: 12000,
          descripcion: 'Rollos de sushi con salmón, aguacate y queso crema',
          like: 4.2,
          isHot() {
            if(this.like > 4) {
                return true;
          }else {return false;}
          
          },

           
      },
      {
          nombre: 'Tacos al Pastor',
          precio: 8000,
          descripcion: 'Tacos con carne de cerdo marinada y piña',
          like: 3.9,
          isHot() {
            if(this.like > 4) {
                return true;
          }else {return false;}
          }
      },
      {
          nombre: 'Hamburguesa BBQ',
          precio: 18000,
          descripcion: 'Hamburguesa de carne de res con salsa BBQ y cebolla caramelizada',
          like: 4.6,
          isHot() {
            if(this.like > 4) {
                return true;
          }else {return false;}
          }
      },
      {
          nombre: 'Ensalada César',
          precio: 10000,
          descripcion: 'Lechuga fresca con pollo, queso parmesano y aderezo César',
          like: 3.5,
          isHot() {
              if(this.like > 4) {
                    return true;
              }else {return false;}
          }
      }
  ]
  
    
    )

products={};

constructor() {

    
}

}

   
      

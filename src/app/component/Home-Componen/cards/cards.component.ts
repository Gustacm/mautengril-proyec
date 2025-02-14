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
        id: 1,
          nombre: 'Pizza Pepperoni',
          precio: 15000,
          descripcion: 'Pizza con base de tomate, queso mozzarella y pepperoni',
          like: 0.8,
          category: 'Pizza',
          isHot() {
            if(this.like > 4) {
                return true;
          }else {return false;}
          
          },

      },
      {
        id: 2,
          nombre: 'Sushi Roll',
          precio: 12000,
          descripcion: 'Rollos de sushi con salmón, aguacate y queso crema',
          like: 4.2,
          category: 'Sushi',
          isHot() {
            if(this.like > 4) {
                return true;
          }else {return false;}
          
          },

           
      },
      {
        id: 3,
          nombre: 'Tacos al Pastor',
          precio: 8000,
          descripcion: 'Tacos con carne de cerdo marinada y piña',
          like: 3.9,
          category: 'Tacos',
          isHot() {
            if(this.like > 4) {
                return true;
          }else {return false;}
          }
      },
      {
        id: 4,
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
        id: 5,
          nombre: 'Ensalada César',
          precio: 10000,
          descripcion: 'Lechuga fresca con pollo, queso parmesano y aderezo César',
          like: 3.5,
          category: 'Ensaladas',
          isHot() {
              if(this.like > 4) {
                    return true;
              }else {return false;}
          }
      }
  ]
  
    
    )


products = signal<Array<any>>([]);


HandlerOrderMayorMnor= () => {
/* ordenar de mayor a menor calificacion  */
let mayorMenor = this.data().sort((a, b) => b.like - a.like);
console.log(mayorMenor);


this.products.set(mayorMenor);

};
HandlerOrderMenorMayor= () => {
  /* ordenar de menor a mmayor calificacion  */

  let menorMayor = this.data().sort((a,b) => a.like - b.like);
  this.products.set(menorMayor);}



  constructor(public stateService: StateService) {
    this.HandlerOrderMayorMnor();


  }


  ngOnInit() {
    console.log(this.stateService.products());
  }
  
  
  
/* 


constructor() {
    this.HandlerOrderMayorMnor();




  } */


}
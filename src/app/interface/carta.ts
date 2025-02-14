 export const  dataMenuJs = [
    {
      id: 1,
        nombre: 'Hamburguesa  Pepperoni',
        precio: 15000,
        descripcion: 'Pizza con base de tomate, queso mozzarella y pepperoni',
        like: 0.8,
        category: 'Hamburguesas',
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
        nombre: 'Hamburgusa Tacos al Pastor',
        precio: 8000,
        descripcion: 'Tacos con carne de cerdo marinada y piña',
        like: 3.9,
        category: 'Hamburguesas',
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
        category: 'Hamburguesas',
        isHot() {
          if(this.like > 4) {
              return true;
        }else {return false;}
        }
    },
    {
      id: 5,
        nombre: 'Sushi César',
        precio: 10000,
        descripcion: 'Lechuga fresca con pollo, queso parmesano y aderezo César',
        like: 3.5,
        category: 'Sushi',
        isHot() {
            if(this.like > 4) {
                  return true;
            }else {return false;}
        }
    }
]
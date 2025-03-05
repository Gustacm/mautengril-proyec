 export const  dataMenuJs = [
    {
      id: Math.random(),
        nombre: 'Hamburguesa  Pepperoni',
        precio: 15000,
        descripcion: 'Pizza con base de tomate, queso mozzarella y pepperoni',
        like: 0.8,
        category: 'Hamburguesas',
        Image: 'https://cdn0.celebritax.com/sites/default/files/styles/watermark_100/public/recetas/hamburguesa_portada.jpg',
        time:12,
        isHot() {
          if(this.like > 4) {
              return true;
        }else {return false;}
        
        },

    },
    {
      id: Math.random(),
        nombre: 'Sushi Roll',
        precio: 12000,
        descripcion: 'Rollos de sushi con salmón, aguacate y queso crema',
        like: 4.2,
        category: 'Sushi',
        Image: 'https://cdn0.celebritax.com/sites/default/files/styles/watermark_100/public/recetas/hamburguesa_portada.jpg',
        time:12,
        isHot() {
          if(this.like > 4) {
              return true;
        }else {return false;}
        
        },

         
    },
    {
      id: Math.random(),
        nombre: 'Hamburgusa Tacos al Pastor',
        precio: 8000,
        descripcion: 'Tacos con carne de cerdo marinada y piña',
        like: 3.9,
        category: 'Hamburguesas',
        Image: 'https://cdn0.celebritax.com/sites/default/files/styles/watermark_100/public/recetas/hamburguesa_portada.jpg',
        time:12,
        isHot() {
          if(this.like > 4) {
              return true;
        }else {return false;}
        }
    },
    {
      id: Math.random(),
        nombre: 'Hamburguesa BBQ',
        precio: 18000,
        descripcion: 'Hamburguesa de carne de res con salsa BBQ y cebolla caramelizada',
        like: 4.6,
        category: 'Hamburguesas',
        Image: 'https://cdn0.celebritax.com/sites/default/files/styles/watermark_100/public/recetas/hamburguesa_portada.jpg',

        time:22,
        isHot() {
          if(this.like > 4) {
              return true;
        }else {return false;}
        }
    },
    {
      id: Math.random(),
        nombre: 'Sushi César',
        precio: 10000,
        descripcion: 'Lechuga fresca con pollo, queso parmesano y aderezo César',
        like: 3.5,
        category: 'Sushi',
        Image: 'https://cdn0.celebritax.com/sites/default/files/styles/watermark_100/public/recetas/hamburguesa_portada.jpg',

                time:29,
                isHot() {
            if(this.like > 4) {
                  return true;
            }else {return false;}
        }
    }
]
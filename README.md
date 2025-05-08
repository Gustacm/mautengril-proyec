# Maute'n Grill - Aplicación Móvil

Aplicación móvil para el restaurante Maute'n Grill, desarrollada con Angular.

## Características

- Menú digital con categorías de productos
- Carrito de compras
- Sistema de entrega a domicilio con cálculo de costos por zonas
- Geolocalización para calcular distancias
- Panel de administración para gestionar productos y zonas de entrega

## Requisitos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)
- Angular CLI (`npm install -g @angular/cli`)

## Instalación

1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd maute-grill
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
ng serve
```

4. Abrir la aplicación en el navegador:
```
http://localhost:4200
```

## Estructura del Proyecto

- `/src/app/components` - Componentes de la aplicación
- `/src/app/services` - Servicios y lógica de negocio
- `/src/app/models` - Modelos de datos
- `/src/assets` - Recursos estáticos (imágenes, etc.)

## Tecnologías Utilizadas

- Angular
- TypeScript
- SCSS
- OpenStreetMap (para geolocalización)
- LocalStorage (para persistencia de datos)

## Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles. 
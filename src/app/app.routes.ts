import { Routes } from '@angular/router';
import { PruebaComponent } from './pages/prueba/prueba.component';
import{ PedidosComponent } from './pages/pedidos/pedidos.component'
import { HomeComponent } from './pages/home/home.component';
export const routes: Routes = [
    {
        path: '',
        component: PruebaComponent
    },
    {
        path: 'pedidos',
        component: PedidosComponent
    },{
        path:'Home',
        component: HomeComponent
    }

];

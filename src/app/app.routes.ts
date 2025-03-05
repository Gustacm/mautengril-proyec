import { Routes } from '@angular/router';
import { PruebaComponent } from './pages/prueba/prueba.component';
import{ PedidosComponent } from './pages/pedidos/pedidos.component'
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';
export const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'pedidos',
        component: PedidosComponent
    },

];

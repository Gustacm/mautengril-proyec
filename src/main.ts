import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LocationService } from './app/services/location.service';

bootstrapApplication(AppComponent, appConfig)
  .then(appRef => {
    const locationService = appRef.injector.get(LocationService); // 🔥 Inyectamos el servicio correctamente
    return locationService.getUserLocation();
  })
  .then(location => {
    console.log('Ubicación obtenida desde main:', location);
  })
  .catch(err => console.error('Error al iniciar la app:', err));

import { Injectable, Injector, Type, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  currentComponent = signal<Type<any> | null>(null);
  componentData: Injector | null = null;

  setComponent(component: Type<any>, injector: Injector) {
    this.currentComponent.set(component);
    this.componentData = injector;
  }

  clearComponent() {
    this.currentComponent.set(null);
    this.componentData = null;
  }
}

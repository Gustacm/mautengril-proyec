import { Injectable, Injector, Type, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  currentComponent = signal<Type<any> | null>(null);
  componentData: Injector | null = null;

  setComponent(component: Type<any>, injector: Injector) {
    console.log('Setting component:', component);
    this.currentComponent.set(component);
    this.componentData = injector;
    console.log('Component set:', this.currentComponent(), 'Injector:', this.componentData);
  }

  clearComponent() {
    this.currentComponent.set(null);
    this.componentData = null;
  }
}
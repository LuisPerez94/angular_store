import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  protected categories = signal<any[]>([]);
  protected isOpen = signal<boolean>(false);

  constructor(private http: HttpClient) {
    this.loadCategories();
  }

  loadCategories() {
    this.http
      .get<any[]>('https://api.escuelajs.co/api/v1/categories')
      .subscribe((res) => {
        this.categories.set(res);
      });
  }

  getCategories() {
    return this.categories;
  }

  getCategoryById(id: number) {
    return this.categories().find((category) => category.id === id);
  }

  getCategoryBySlug(slug: string) {
    return this.categories().find((category) => category.slug === slug);
  }

  getIsOpen() {
    return this.isOpen;
  }

  toggleMenu() {
    this.isOpen.set(!this.isOpen());
  }
}

import { Category } from "../models/category"
import { HTTP_DOMAIN } from "./constants"

export const CategoriesService = {
  async getAll(): Promise<Category[]> {
    const res = await fetch(`${HTTP_DOMAIN}/categories`)
    return res.json();
  },
  
  async get(id: number): Promise<Category> {
    const res = await fetch(`${HTTP_DOMAIN}/categories/${id}`)
    return res.json();
  },

  async remove(id: number): Promise<void> {
    const res = await fetch(`${HTTP_DOMAIN}/categories/${id}`, {method: 'DELETE'})
    return;
  },

  async create(name: string): Promise<Category> {
    const res = await fetch(`${HTTP_DOMAIN}/categories/`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name}),
    });
    return res.json();
  }
}
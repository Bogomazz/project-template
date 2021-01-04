import { Category } from "../models/category";
import { User } from "./user";

export interface Store {
  categories: Category[] | null;
  user: User | null;
  setCategories: (categories: Category[]) => void;
  setUser: (user: User) => void;
}
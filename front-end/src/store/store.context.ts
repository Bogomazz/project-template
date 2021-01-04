import React from "react";
import { Category } from "../models/category";
import { Store } from "./store.interface";
import { User } from "./user";

export const StoreContext = React.createContext<Store>({
  categories: [],
  setCategories: (categories: Category[]) => {},
  user: null,
  setUser: (user: User) => {},
});
import { User } from "../store/user";
import { HTTP_DOMAIN } from "./constants";

export const AuthService = {
  async register(user: User) {
    const res = await fetch(`${HTTP_DOMAIN}/auth/register`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    });
    if (res.status === 200) {
      return res.json();
    } else {
      const message = await res.text();
      throw new Error(message);
    }
  },

  async login(name: string, password: string) {
    const res = await fetch(`${HTTP_DOMAIN}/auth/login`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        password
      }),
    });
    if (res.status === 200) {
      return res.json();
    } else {
      const message = await res.text();
      throw new Error(message);
    }
  }
}
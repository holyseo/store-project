import { lazy } from "react";
import Home from "./pages/Home";

export const ALLOWED_CATEGORIES = {
  MENS: "men's clothing",
  WOMENS: "women's clothing",
};

const Products = lazy(() => import("./pages/Products"));

export const appRoutes = [
  {
    path: "/",
    component: Home,
    requiresAuth: false,
  },
  {
    path: "/products",
    component: Products,
    requiresAuth: false,
  },
  {
    path: "/products/:category?",
    component: Products,
    requiresAuth: false,
  },
];

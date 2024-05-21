import { lazy } from "react";
import Home from "./pages/Home";

export const ALLOWED_CATEGORIES = {
  MENS: "men's clothing",
  WOMENS: "women's clothing",
};

const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Login = lazy(() => import("./pages/Login"));

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
  {
    path: "/cart",
    component: Cart,
    requiresAuth: false,
  },
  {
    path: "/checkout",
    component: Checkout,
    requiresAuth: true,
  },
  {
    path: "/login",
    component: Login,
    requiresAuth: true,
  },
];

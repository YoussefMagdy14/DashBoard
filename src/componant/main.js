import React from "react";
import "./sidebars.css";
import Sidebar from "./sidebar.js";
import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Customers from "./pages/customers";
import Home from "./pages/home.js";
import Orders from "./pages/order.js";
import Products from "./pages/products.js";

export default function Main() {
  return (
    <BrowserRouter>
      <main>
        <Sidebar />

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/" element={<Home />} exact="true" />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

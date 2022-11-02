import React from "react";
import { Link } from "react-router-dom";

export const HorizontalBar = ({ rol }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {rol === "admin" ? (
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to={"/"}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/ProductList"}>Lista productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/SalesList"}>Lista de ventas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/CreateProduct"}>Crear Nuevos productos
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to={"/CreateUsers"}>CrearUsuarios
              </Link> */}
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to={"/"}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/CustomerProductList"}>Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/ShoppingCart"}>Carrito de Compras
              </Link>
            </li>

          </ul>
        )}
      </div>
    </nav>
  );
};
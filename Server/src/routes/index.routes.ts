import express, { NextFunction } from "express";
import productsRouter from "./products.routes";

const routes = express.Router();

/** GET /health-check - Ver el estado del servicio */
routes.get("/health-check", (req, res) => res.send("OK"));

// Endpoint /products
routes.use("/products", productsRouter);

export default routes;

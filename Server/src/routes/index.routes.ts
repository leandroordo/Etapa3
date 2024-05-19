import express from "express";
import productsRouter from "./products.routes";
import messagesRouter from "./messages.routes";

const routes = express.Router();

/** GET /health-check - Ver el estado del servicio */
routes.get("/health-check", (req, res) => res.send("OK"));

// Endpoint /products
routes.use("/products", productsRouter);
// Endpoint /messages
routes.use("/messages", messagesRouter);
export default routes;

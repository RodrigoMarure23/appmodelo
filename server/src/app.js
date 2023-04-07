import express from "express";
import morgan from 'morgan'

//rutas
import productRoutes from "./routes/products.routes"

const app=express();

//settings
app.set("port",4000)

//middlewares
app.use(morgan("dev"));//sirve para ver las peticiones en consola

//rutas
app.use(productRoutes)

export default app;
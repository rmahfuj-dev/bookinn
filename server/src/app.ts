import express, { Request, Response } from "express";
import placeRoutes from "./routes/place.routes.js";

const app = express();

app.use(express.json());

app.use("/places", placeRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
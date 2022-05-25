import bodyParser from "body-parser";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import { AppDataSource } from "./configs/data-source";
import leadsControllerRouter from "./controllers/leadsController";

const app = express();
app.use(helmet());
app.use(bodyParser.json());

app.use("/lead/", leadsControllerRouter);

// Auto database migration
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default app;

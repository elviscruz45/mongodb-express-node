import * as express from "express";
import * as mongoose from "mongoose";
import { getEnvironmentVariables } from "./environments/environments";
import UserRouter from "./routers/UserRouter";
import * as bodyParser from "body-parser";

export class Server {
  public app: express.Application = express();

  constructor() {
    this.setConfigs();
    this.setRoutes();
    this.error404Handler();
    this.handleErrors();
  }
  setConfigs() {
    this.connectMongoDB();
    this.configureBodyParser();
  }
  connectMongoDB() {
    mongoose.connect(getEnvironmentVariables().db_uri).then(() => {
      console.log("connected to MONGODB");
    });
  }
  configureBodyParser() {
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
  }

  setRoutes() {
    this.app.use("/api/user", UserRouter);
  }
  userRoutes() {}

  error404Handler() {
    this.app.use((req, res) => {
      res.status(404).json({
        message: "no hay pe causa",
        status_code: 404,
      });
    });
  }

  handleErrors() {
    this.app.use((error, req, res, next) => {
      const errorStatus = req.errorStatus || 500;
      res.status(errorStatus).json({
        message: error.message || "Something went wrong",
        status_code: errorStatus,
      });
    });
  }
}

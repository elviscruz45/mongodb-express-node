import * as express from "express";
import * as mongoose from "mongoose";
import { getEnvironmentVariables } from "./environments/environments";

let app: express.Application = express();

app.listen(3000, () => {
  console.log("server is running at port 3000");
});

mongoose.connect(getEnvironmentVariables().db_uri).then(() => {
  console.log("connected to MONGODB");
});

app.get("/api/user/login", (req, res) => {
  console.log("req=", req.query);
  //   const data = { name: "elvis", email: "elviscruz45@gmail.com" };
  //   res.status(207).send(data);
  res.send("success");
});

app.get("/api/user/test", (req, res) => {
  console.log("req", req);
  // const data = { name: "elvis", email: "elviscruz45@gmail.com" };
  // res.status(207).send(data);
  res.send("test");
});

app.use((req, res, next) => {
  console.log("middleware1");
  next();
});

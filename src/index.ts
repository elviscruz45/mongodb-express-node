import { Server } from "./server";

// let app: express.Application = express();

let server = new Server().app;
let port = 3000;

server.listen(port, () => {
  console.log(`server is running at port ${port}`);
});

// mongoose.connect(getEnvironmentVariables().db_uri).then(() => {
//   console.log("connected to MONGODB");
// });

// app.use((req, res, next) => {
//   console.log("middleware1");
//   next();
// });

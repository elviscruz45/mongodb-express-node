import { Router } from "express";
import { UserControllers } from "../controllers/UserControllers";

class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    this.patchRoutes();
    this.putRoutes();
    this.deleteRoutes();
  }
  getRoutes() {
    this.router.post("/login", UserControllers.login);
    this.router.get(
      "/test",
      UserControllers.login,
      UserControllers.test1,
      UserControllers.test2
    );
  }
  postRoutes() {}
  patchRoutes() {}
  putRoutes() {}
  deleteRoutes() {}
}

export default new UserRouter().router;
{
}

export class UserControllers {
  static login(req, res, next) {
    // const data = { name: "elvis", email: "elviscruz45@gmail.com" };
    // res.status(200).send(data);
    (req as any).msg = 422;

    const error = new Error("use email or password does not match");
    next(error);
  }
  static test1(req, res, next) {
    console.log("test");
    (req as any).msg = "this is a test";
    next();
  }

  static test2(req, res) {
    res.send((req as any).msg);
  }
}

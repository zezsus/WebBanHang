const authRouter = require("./AuthRouter");

const routers = (app) => {
  app.use("/api/auth/", authRouter);
};

module.exports = routers;

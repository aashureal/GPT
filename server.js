const app = require("./src/app");

const indexRouter = require("./src/routes/index.routes");
const authRouter = require("./src/routes/auth.routes");

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.listen(3000);

require("dotenv").config();
const app = require("./src/app");
const connectToDatabase = require("./src/db/db");

/* Using Routes */
const authRouter = require("./src/routes/auth.routes");

// Database
connectToDatabase();


app.get("/", (req, res) => {
  res.json({
    mes: "server is running",
  });
});



/* APIs */
app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

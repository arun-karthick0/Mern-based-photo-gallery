import express from "express";
import mongoose from "mongoose";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import routes from "./routes/imageRoutes.js";
const PORT = process.env.PORT;
const connection = process.env.connection_url;

// middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("public/uploads"));

// routes
app.use("/", routes);

// app.get("/", (req, res) => {
//   res.json("welcome");
// });

mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(PORT, () => {
      console.log(`server running in http://localhost:${PORT}`);
    })
  )
  .catch((err) => console.log(err));

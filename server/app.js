import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: "true" })); //try uploading a large img
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors()); //cors is used for cross origin resource sharing

const CONNECTION_URL =
  "mongodb+srv://derryl:test1234@cluster0.vluss.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  })
  .catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify',false)
app.use("/posts", postRoutes);

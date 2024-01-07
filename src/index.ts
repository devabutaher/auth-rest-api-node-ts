import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import http from "http";
import mongoose from "mongoose";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

app.get("/", (req, res) => res.send("Hello World!"));
server.listen(8080, () => console.log(`Server listening on port 8080!`));

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on(`error`, (error: Error) => console.error(error));

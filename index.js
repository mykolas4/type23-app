import express from "express";
import cors from "cors";

import taskRouter from "./src/route/task.js"

const app = express();

app.use(express.json());
app.use(cors());


app.use(taskRouter);

//CAO
app.get("/cars/:model", (req, res) => {
  console.log(req.params.model);
  res.send("OK");
});

app.listen(3000);
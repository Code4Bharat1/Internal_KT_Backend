import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/api/isworking", async (req, res) => {
  const data = req.body;
  return res.status(200).json({ data });
});







import StudenRouter from './router/student.router.js'

app.use("/api/student",StudenRouter)










app.listen(5002, () => {
  console.log("server is litening to port 5002");
});

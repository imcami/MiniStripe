import express from "express";
import cors from "cors";
import paymentRouter from "./routes/payments.routes.js";

const app = express();

app.use(cors());
app.use("/api/payments", paymentRouter);

app.listen(8080, () => console.log("Server on port 8080"));

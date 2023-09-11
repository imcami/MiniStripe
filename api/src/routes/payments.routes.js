import { Router } from "express";
import paymentService from "../services/payment.js";

const router = Router();

const products = [
  { id: 1, name: "Mancuernas", price: 1000 },
  { id: 2, name: "Bandas elásticas", price: 500 },
  { id: 3, name: "Cinturon de fuerza", price: 1500 },
  { id: 4, name: "Barra de dominadas", price: 1000 },
  { id: 5, name: "Straps", price: 1800 },
];

router.post("/payment-intents", async (req, res) => {
  const productReq = products.find(
    (products) => products.id === parseInt(req.query.id)
  );
  const paymentIntentInfo = {
    amount: productReq.price,
    currency: "usd",
  };
  const service = new paymentService();

  let result = await service.createPaymentIntent(paymentIntentInfo);
  console.log(result);
  res.send({ status: "success", payload: result });
});

export default router;

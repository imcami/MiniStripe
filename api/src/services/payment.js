import Stripe from "stripe";

export default class PaymentService {
  constructor() {
    this.stripe = new Stripe(
      " sk_test_51NpACIDrzYCLJ485Id1fl3NBkgxvoLob4o1AsNEm67CzEPqyGwUukfUwb8dOxdstCU9eIsPyht2pmmxcXErF6u9o00O9YYTENj"
    );
  }
  createPaymentIntent = async (data) => {
    const paymentIntent = this.stripe.paymentIntents.create(data);
    return paymentIntent;
  };
}

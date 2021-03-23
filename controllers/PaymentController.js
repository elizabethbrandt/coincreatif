const stripe = require(process.env.STRIPE_SECRECT_KEY);

const createPaymentSession = async (req, res) => {
    let { cart, customer_email } = req.body;

    line_items = cart.map((item) => {
    return {
      name: item.title,
      images: [item.image],
      amount: item.price * 100,
      currency: "usd",
      quantity: item.quantity,
    };
  });

  try {
    let session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email,
      success_url: process.env.APP_URL,
      cancel_url: process.env.APP_URL,
      line_items,
    });

    return res.json({
      session,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createPaymentSession };



const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function (event) {
  let token, amount;
  try {
    const body = JSON.parse(event.body);
    token = body.token;
    amount = body.amount;
  } catch (err) {
    return {
      statusCode: 500,
      body: err.message,
    };
  }

  const body = {
    source: token.id,
    amount: amount,
    currency: 'usd',
  };

  try {
    const stripeRes = await stripe.charges.create(body);
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: stripeRes,
      }),
    };
  } catch (stripeErr) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: stripeErr,
      }),
    };
  }
};
